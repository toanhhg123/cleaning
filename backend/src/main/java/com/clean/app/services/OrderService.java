package com.clean.app.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.clean.app.entity.CommissionOrder;
import com.clean.app.exceptions.ApiError;
import org.springframework.stereotype.Service;

import com.clean.app.entity.Order;
import com.clean.app.entity.OrderImage;
import com.clean.app.entity.Wallet;
import com.clean.app.repository.OrderImageRepository;
import com.clean.app.repository.OrderRepository;
import com.clean.app.repository.WalletRepository;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderImageRepository orderImageRepository;
    private final WalletService walletService;
    private final WalletRepository walletRepository;
    private final CommissionOrderService commissionOrderService;

    static final Double COMMISSION_ORDER = 0.1;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    public List<Order> getOrdersByStatus(String status) {
        return orderRepository.findByStatus(status);
    }

    public List<Order> getOrdersByEmployeeId(Long employeeId) {
        return orderRepository.findByEmployeeId(employeeId);
    }

    public List<Order> getByCustomerId(Long id) {
        return orderRepository.findByCustomerId(id);
    }

    public List<Order> getOrdersByServiceId(Long serviceId) {
        return orderRepository.findByServiceId(serviceId);
    }


    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }


    public Order cancelOrder(Long id) {

        Order order = orderRepository.findById(id).orElse(null);

        if (order != null) {
            order.setStatus("canceled");
            return orderRepository.save(order);
        }

        return null;
    }

    public OrderImage createOrderImage(OrderImage order) {
        return orderImageRepository.save(order);
    }

    public List<OrderImage> getOrderImagesByOrderId(Long orderId) {
        return orderImageRepository.findByOrderId(orderId);
    }

    public Double getSumOrder(Date dateFrom, Date dateTo) {
        var price = orderRepository.sumPriceOrder(dateFrom, dateTo);

        if(price == null) {
            return 0.0;
        }

        return price;
    }

    /**
     * Updates the order details for a given order ID.
     * If the order status is 'success' and it's not yet paid, it updates the
     * balance of both the employee and customer.
     *
     * @param id           the ID of the order to be updated
     * @param orderDetails the new details for the order
     * @return the updated order, or null if the order with the given ID does not
     * exist
     */
    @Transactional
    public Order updateOrder(Long id, Order orderDetails) {
        Optional<Order> orderOptional = orderRepository.findById(id);

        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            order.setStatus(orderDetails.getStatus());
            order.setAddress(orderDetails.getAddress());

            // Check if the order is marked as successful and is not yet paid
            boolean isPaid = Boolean.TRUE.equals(order.getIsPaid());
            if ("success".equals(orderDetails.getStatus()) && !isPaid) {
                // Retrieve the wallets of the employee and customer
                Wallet walletEmployee = walletService.getWalletByUserId(order.getEmployeeId());
                Wallet walletCustomer = walletService.getWalletByUserId(order.getCustomerId());

                double priceAfterCommission = order.getPrice() == null ? 0 : order.getPrice() * (1 - COMMISSION_ORDER);

                // Update the balance: credit to employee, debit from customer
                walletEmployee
                        .setBalance(walletEmployee.getBalance() + priceAfterCommission);
                walletCustomer
                        .setBalance(walletCustomer.getBalance() - (order.getPrice() == null ? 0 : order.getPrice()));

                order.setIsPaid(Boolean.TRUE);
                walletRepository.save(walletEmployee);
                walletRepository.save(walletCustomer);

                CommissionOrder commissionOrder = CommissionOrder.builder()
                        .price(order.getPrice() == null ? 0 : order.getPrice() * COMMISSION_ORDER)
                        .orderId(order.getId())
                        .build();

                commissionOrderService.create(commissionOrder);
            }

            // Save and return the updated order
            return orderRepository.save(order);
        }
        return null; // Return null if the order does not exist
    }

    public Order acceptOrder(Long id, Long employeeId) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();

            if (orderRepository.existsOrderAcceptByEmployee(employeeId, order.getDateFrom(), order.getDateTo())) {
                throw new ApiError("Lịch làm việc bị trùng với những đơn đặt hàng trước đó");
            }

            order.setStatus("processing");
            order.setEmployeeId(employeeId);
            return orderRepository.save(order);
        }
        return null;
    }

    @Transactional
    public boolean deleteOrder(Long id) {
        if (orderRepository.existsById(id)) {
            orderImageRepository.deleteByOrderId(id);
            orderRepository.deleteById(id);
            return true;
        }
        return false;
    }
}