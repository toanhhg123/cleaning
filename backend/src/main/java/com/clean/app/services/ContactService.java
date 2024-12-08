package com.clean.app.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.clean.app.entity.Contact;
import com.clean.app.repository.ContactRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ContactService {
    private final ContactRepository repository;

    public List<Contact> getAll() {
        return repository.findAll();
    }

    public Contact create(Contact contact) {
        return repository.save(contact);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}