package com.clean.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.clean.app.entity.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
