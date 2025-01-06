package com.clean.app.controllers;

import com.clean.app.entity.CommissionOrder;
import com.clean.app.services.CommissionOrderService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/commission-order")
@AllArgsConstructor
public class CommissionOrderController {
    private final CommissionOrderService commissionOrderService;

    @GetMapping
    public List<CommissionOrder> getAll() {
        return commissionOrderService.getAll();
    }
}
