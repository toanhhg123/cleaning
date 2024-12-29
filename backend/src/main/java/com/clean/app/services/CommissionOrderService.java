package com.clean.app.services;

import com.clean.app.entity.CommissionOrder;
import com.clean.app.repository.CommissionOrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CommissionOrderService {
    private  final CommissionOrderRepository repository;

    public CommissionOrder create(CommissionOrder commissionOrder) {
        return repository.save(commissionOrder);
    }
}
