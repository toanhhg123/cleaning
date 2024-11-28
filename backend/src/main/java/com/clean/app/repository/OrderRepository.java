package com.clean.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clean.app.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByStatus(String status);

    List<Order> findByEmployeeId(Long employeeId);

    List<Order> findByCustomerId(Long customerId);

    List<Order> findByServiceId(Long serviceId);
}
