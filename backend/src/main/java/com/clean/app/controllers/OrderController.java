package com.clean.app.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clean.app.entity.Order;
import com.clean.app.entity.OrderImage;
import com.clean.app.services.OrderService;
import com.clean.app.services.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/orders")
@AllArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final UserService userService;

    // lấy tất cả
    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    // lấy theo id
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Order order = orderService.getOrderById(id);
        return order != null ? ResponseEntity.ok(order) : ResponseEntity.notFound().build();
    }

    // lấy theo status
    @GetMapping("/status/{status}")
    public List<Order> getOrdersByStatus(@PathVariable String status) {
        return orderService.getOrdersByStatus(status);
    }

    // lấy theo của người dùng đang đăng nhập
    @GetMapping("/my-orders")
    public List<Order> getMyOrders() {
        var id = userService.getCurrentUser().getId();
        return orderService.getByCustomerId(id);
    }

    // lấy theo người dùng
    @GetMapping("/employee/{employeeId}")
    public List<Order> getOrdersByEmployeeId(@PathVariable Long employeeId) {
        return orderService.getOrdersByEmployeeId(employeeId);
    }

    // lấy danh sách công việc của người đang đang nhập
    @GetMapping("/my-works")
    public List<Order> getMyWorks() {
        var employeeId = userService.getCurrentUser().getId();
        return orderService.getOrdersByEmployeeId(employeeId);
    }

    // lấy theo dich vu
    @GetMapping("/service/{serviceId}")
    public List<Order> getOrdersByServiceId(@PathVariable Long serviceId) {
        return orderService.getOrdersByServiceId(serviceId);
    }

    // tao moi order
    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        order.setCustomerId(userService.getCurrentUser().getId());
        return orderService.createOrder(order);
    }

    // tao hinh anh
    @PostMapping("/image")
    public OrderImage createOrderImage(@RequestBody OrderImage orderImage) {
        return orderService.createOrderImage(orderImage);
    }

    // lay danh sach hinh anh theo order id
    @GetMapping("/image/{orderId}")
    public List<OrderImage> getOrderImagesByOrderId(@PathVariable Long orderId) {
        return orderService.getOrderImagesByOrderId(orderId);
    }

    // nhan cong viec
    @PostMapping("/accept/{id}")
    public Order acceptOrder(@PathVariable Long id) {
        var employeeId = userService.getCurrentUser().getId();
        return orderService.acceptOrder(id, employeeId);
    }

    // cap nhat
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order orderDetails) {
        Order updatedOrder = orderService.updateOrder(id, orderDetails);
        return ResponseEntity.ok(updatedOrder);
    }

    // xoa
    @DeleteMapping("/{id}")
    public ResponseEntity<Long> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.ok(id);
    }
}
