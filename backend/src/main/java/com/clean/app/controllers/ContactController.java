package com.clean.app.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clean.app.entity.Contact;
import com.clean.app.services.ContactService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController()
@RequestMapping("/api/contact")
public class ContactController {
    private final ContactService service;

    // api lay tat ca
    @GetMapping
    public List<Contact> getAll() {
        return service.getAll();
    }

    // api tao
    @PostMapping
    public Contact create(@RequestBody Contact contact) {
        return service.create(contact);
    }

    // api xoa
    @DeleteMapping("/{id}")
    public Long deleteFeedback(@PathVariable Long id) {
        service.delete(id);
        return id;
    }
}
