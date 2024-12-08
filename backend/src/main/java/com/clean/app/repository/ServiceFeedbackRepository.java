package com.clean.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clean.app.entity.ServiceFeedback;

@Repository
public interface ServiceFeedbackRepository extends JpaRepository<ServiceFeedback, Long> {
    List<ServiceFeedback> findByServiceId(Long serviceId);
}
