package com.clean.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.clean.app.entity.Services;
import com.clean.app.repository.ServiceRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ServiceService {

    private final ServiceRepository serviceRepository;

    public List<Services> getAllServices() {
        return serviceRepository.findAll();
    }

    public Services getServiceById(Long id) {
        return serviceRepository.findById(id).orElse(null);
    }

    public List<Services> getServicesByStatus(String status) {
        return serviceRepository.findByStatus(status);
    }

    public List<Services> getServicesByCustomerId(Long customerId) {
        return serviceRepository.findByCustomerId(customerId);
    }

    public Services createService(Services service) {
        return serviceRepository.save(service);
    }

    public Services updateService(Long id, Services serviceDetails) {
        Optional<Services> serviceOptional = serviceRepository.findById(id);
        if (serviceOptional.isPresent()) {
            Services service = serviceOptional.get();
            service.setName(serviceDetails.getName());
            service.setDescription(serviceDetails.getDescription());
            service.setPrice(serviceDetails.getPrice());
            service.setStatus(serviceDetails.getStatus());
            service.setTag(serviceDetails.getTag());
            service.setPhone(serviceDetails.getPhone());
            service.setTime(serviceDetails.getTime());
            service.setAddress(serviceDetails.getAddress());
            return serviceRepository.save(service);
        }
        return null;
    }

    public List<Services> getServicesByTag(String tag) {
        return serviceRepository.findByTag(tag);
    }

    public Services approveService(Long id) {
        Optional<Services> serviceOptional = serviceRepository.findById(id);
        if (serviceOptional.isPresent()) {
            Services service = serviceOptional.get();
            service.setStatus("approved");
            return serviceRepository.save(service);
        }
        return null;
    }

    public Services rejectService(Long id) {
        Optional<Services> serviceOptional = serviceRepository.findById(id);
        if (serviceOptional.isPresent()) {
            Services service = serviceOptional.get();
            service.setStatus("rejected");
            return serviceRepository.save(service);
        }
        return null;
    }

    public boolean deleteService(Long id) {
        if (serviceRepository.existsById(id)) {
            serviceRepository.deleteById(id);
            return true;
        }
        return false;
    }
}