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
@Table(name = "services")
public class Services {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 1000)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Double price;

    private String phone;
    private String address;
    private String time;

    @Column(nullable = false)
    private Double pricePerHour;

    private String tag;

    @Column(name = "customer_id", nullable = false)
    private Long customerId;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false, insertable = false, updatable = false)
    private User customer;

    @Column(nullable = false, length = 50)
    private String status = "pending";

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
