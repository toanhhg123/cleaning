package com.clean.app.services;

import java.util.List;
import java.util.Optional;

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

    @Transactional()
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public OrderImage createOrderImage(OrderImage order) {
        return orderImageRepository.save(order);
    }

    public List<OrderImage> getOrderImagesByOrderId(Long orderId) {
        return orderImageRepository.findByOrderId(orderId);
    }

    /**
     * Updates the order details for a given order ID.
     * If the order status is 'success' and it's not yet paid, it updates the
     * balance of both the employee and customer.
     *
     * @param id           the ID of the order to be updated
     * @param orderDetails the new details for the order
     * @return the updated order, or null if the order with the given ID does not
     *         exist
     */
    @Transactional
    public Order updateOrder(Long id, Order orderDetails) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            order.setStatus(orderDetails.getStatus());

            // Check if the order is marked as successful and is not yet paid
            boolean isPaid = Boolean.TRUE.equals(order.getIsPaid());
            if ("success".equals(orderDetails.getStatus()) && !isPaid) {
                // Retrieve the wallets of the employee and customer
                Wallet walletEmployee = walletService.getWalletByUserId(order.getEmployeeId());
                Wallet walletCustomer = walletService.getWalletByUserId(order.getCustomerId());

                // Update the balance: credit to employee, debit from customer
                walletEmployee.setBalance(walletEmployee.getBalance() + order.getService().getPrice());
                walletCustomer.setBalance(walletCustomer.getBalance() - order.getService().getPrice());

                order.setIsPaid(Boolean.TRUE);
                walletRepository.save(walletEmployee);
                walletRepository.save(walletCustomer);
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