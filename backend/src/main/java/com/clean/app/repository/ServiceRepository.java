package com.clean.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clean.app.entity.Services;

@Repository
public interface ServiceRepository extends JpaRepository<Services, Long> {
    List<Services> findByStatus(String status);

    List<Services> findByCustomerId(Long customerId);

    List<Services> findByTag(String tag);
}
