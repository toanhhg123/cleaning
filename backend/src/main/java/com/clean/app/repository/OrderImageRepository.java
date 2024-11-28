package com.clean.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clean.app.entity.OrderImage;

@Repository
public interface OrderImageRepository extends JpaRepository<OrderImage, Long> {
    List<OrderImage> findByOrderId(Long orderId);

    void deleteByOrderId(Long orderId);
}
