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

    // lấy tất cả
    public List<Contact> getAll() {
        return repository.findAll();
    }

    // thêm
    public Contact create(Contact contact) {
        return repository.save(contact);
    }

    // xóa
    public void delete(Long id) {
        repository.deleteById(id);
    }

}