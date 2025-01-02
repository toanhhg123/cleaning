package com.clean.app.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.clean.app.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByStatus(String status);

    List<Order> findByEmployeeId(Long employeeId);

    @Query("SELECT o FROM Order o WHERE o.customerId = :customerId AND o.status != 'canceled'")
    List<Order> findByCustomerId(Long customerId);

    List<Order> findByServiceId(Long serviceId);

    @Query("SELECT CASE WHEN COUNT(o) > 0 THEN true ELSE false END FROM Order o WHERE o.customerId = :customerId AND o.serviceId = :serviceId")
    boolean existsByCustomerIdAndServiceId(@Param("customerId") Long customerId, @Param("serviceId") Long serviceId);

    @Query("SELECT CASE WHEN COUNT(o) > 0 THEN true ELSE false END FROM Order o " +
            "WHERE o.status = 'processing' AND o.employeeId = :employeeId " +
            "AND (o.dateFrom BETWEEN :dateFrom AND :dateTo OR o.dateTo BETWEEN :dateFrom AND :dateTo)")
    boolean existsOrderAcceptByEmployee(Long employeeId, Date dateFrom, Date dateTo);

    @Query("SELECT SUM(o.price) FROM Order o WHERE o.status = 'success' AND o.createdAt BETWEEN :dateFrom AND :dateTo")
    Double sumPriceOrder(Date dateFrom, Date dateTo);
}
