package com.clean.app.services;

import java.io.IOException;
import java.util.List;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.clean.app.dto.Permission;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class PermissionService {

    public Permission getDashboardPermission() throws IOException {
        ClassPathResource resource = new ClassPathResource("permissions/DASHBOARD_PERMISSION.json");
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(resource.getInputStream(),
                Permission.class);
    }

    public Permission getManagerPermission() throws IOException {
        ClassPathResource resource = new ClassPathResource("permissions/MANAGEMENT_PERMISSION.json");
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(resource.getInputStream(),
                Permission.class);
    }

    public List<Permission> getManagerOther() throws IOException {
        ClassPathResource resource = new ClassPathResource("permissions/OTHERS_PERMISSION.json");
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(resource.getInputStream(),
                new TypeReference<List<Permission>>() {
                });
    }
}
