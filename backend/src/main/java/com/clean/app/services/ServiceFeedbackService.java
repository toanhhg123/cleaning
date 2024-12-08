package com.clean.app.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.clean.app.entity.ServiceFeedback;
import com.clean.app.repository.ServiceFeedbackRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ServiceFeedbackService {
    private final ServiceFeedbackRepository serviceFeedbackRepository;
    private final UserService userService;

    public List<ServiceFeedback> getAllFeedback() {
        return serviceFeedbackRepository.findAll();
    }

    public List<ServiceFeedback> getByServiceId(Long serviceId) {
        return serviceFeedbackRepository.findByServiceId(serviceId);
    }

    public ServiceFeedback createFeedback(ServiceFeedback feedback) {
        Long userId = userService.getCurrentUser().getId();
        feedback.setUserId(userId);
        return serviceFeedbackRepository.save(feedback);
    }

    public void deleteFeedback(Long id) {
        serviceFeedbackRepository.deleteById(id);
    }

}
