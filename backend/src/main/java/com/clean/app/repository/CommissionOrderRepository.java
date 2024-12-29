package com.clean.app.repository;

import com.clean.app.entity.CommissionOrder;
import com.clean.app.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommissionOrderRepository extends JpaRepository<CommissionOrder, Long> {

}
