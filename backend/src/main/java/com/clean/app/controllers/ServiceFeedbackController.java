package com.clean.app.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clean.app.entity.ServiceFeedback;
import com.clean.app.services.ServiceFeedbackService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController()
@RequestMapping("/api/service-feedback")
public class ServiceFeedbackController {
    private final ServiceFeedbackService serviceFeedbackService;

    @GetMapping
    public List<ServiceFeedback> getMethodName() {
        return serviceFeedbackService.getAllFeedback();
    }

    @GetMapping("/service/{serviceId}")
    public List<ServiceFeedback> getByServiceId(@PathVariable Long serviceId) {
        return serviceFeedbackService.getByServiceId(serviceId);
    }

    @PostMapping
    public ServiceFeedback createFeedback(@RequestBody ServiceFeedback feedback) {
        return serviceFeedbackService.createFeedback(feedback);
    }

    @DeleteMapping("/{id}")
    public Long deleteFeedback(@PathVariable Long id) {
        serviceFeedbackService.deleteFeedback(id);
        return id;
    }
}
