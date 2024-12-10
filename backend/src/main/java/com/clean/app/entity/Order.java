package com.clean.app.entity;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "service_id")
    private Long serviceId;

    @ManyToOne
    @JoinColumn(name = "service_id", nullable = false, insertable = false, updatable = false)
    private Services service;

    private String address;

    @ManyToOne
    @JoinColumn(name = "employee_id", insertable = false, updatable = false)
    private User employee;

    @Column(name = "employee_id")
    private Long employeeId;

    @Column(columnDefinition = "boolean default false")
    private Boolean isPaid;

    @Column(nullable = false, length = 50)
    private String status = "pending";

    private Date dateFrom;

    private Date dateTo;

    @ManyToOne
    @JoinColumn(name = "customer_id", insertable = false, updatable = false)
    private User customer;

    @Column(name = "customer_id")
    private Long customerId;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private Date updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = new Date();
        updatedAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = new Date();
    }
}