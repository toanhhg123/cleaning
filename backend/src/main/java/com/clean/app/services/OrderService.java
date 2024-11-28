package com.clean.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.clean.app.entity.Order;
import com.clean.app.entity.OrderImage;
import com.clean.app.repository.OrderImageRepository;
import com.clean.app.repository.OrderRepository;
import com.clean.app.repository.ServiceRepository;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderImageRepository orderImageRepository;

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

    public Order updateOrder(Long id, Order orderDetails) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            order.setStatus(orderDetails.getStatus());
            order.setEmployeeId(orderDetails.getEmployeeId());
            return orderRepository.save(order);
        }
        return null;
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

    public boolean deleteOrder(Long id) {
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id);
            return true;
        }
        return false;
    }
}