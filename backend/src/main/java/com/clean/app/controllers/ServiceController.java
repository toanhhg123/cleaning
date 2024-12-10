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

import com.clean.app.entity.Services;
import com.clean.app.services.ServiceService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/services")
@AllArgsConstructor
public class ServiceController {

    private final ServiceService serviceService;

    @GetMapping
    public List<Services> getAllServices() {
        return serviceService.getAllServices();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Services> getServiceById(@PathVariable Long id) {
        Services service = serviceService.getServiceById(id);
        return service != null ? ResponseEntity.ok(service) : ResponseEntity.notFound().build();
    }

    @GetMapping("/status/{status}")
    public List<Services> getServicesByStatus(@PathVariable String status) {
        return serviceService.getServicesByStatus(status);
    }

    @GetMapping("/tag/{tag}")
    public List<Services> getServicesByTags(@PathVariable String tag) {
        return serviceService.getServicesByTag(tag);
    }

    @GetMapping("/customer/{customerId}")
    public List<Services> getServicesByCustomerId(@PathVariable Long customerId) {
        return serviceService.getServicesByCustomerId(customerId);
    }

    @PostMapping
    public Services createService(@RequestBody Services service) {
        return serviceService.createService(service);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Services> updateService(@PathVariable Long id, @RequestBody Services serviceDetails) {
        Services updatedService = serviceService.updateService(id, serviceDetails);
        return updatedService != null ? ResponseEntity.ok(updatedService) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<Services> approveService(@PathVariable Long id) {
        Services approvedService = serviceService.approveService(id);
        return approvedService != null ? ResponseEntity.ok(approvedService) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/reject")
    public ResponseEntity<Services> rejectService(@PathVariable Long id) {
        Services rejectedService = serviceService.rejectService(id);
        return rejectedService != null ? ResponseEntity.ok(rejectedService) : ResponseEntity.notFound().build();
    }

    /************* ✨ Codeium Command ⭐ *************/
    /****** 84abfc35-5423-4b8e-aabd-96c775c7188b *******/
    @DeleteMapping("/{id}")
    public ResponseEntity<Long> deleteService(@PathVariable Long id) {
        serviceService.deleteService(id);
        return ResponseEntity.ok(id);
    }
}