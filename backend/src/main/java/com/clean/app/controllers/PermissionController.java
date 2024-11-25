package com.clean.app.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clean.app.dto.Permission;
import com.clean.app.services.PermissionService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/permission")
@AllArgsConstructor
public class PermissionController {
    private final PermissionService permissionService;

    @GetMapping("/admin")
    public ResponseEntity<List<Permission>> getAdminPermission() throws IOException {
        List<Permission> permissions = new ArrayList<>();
        permissions.add(permissionService.getDashboardPermission());
        permissions.add(permissionService.getManagerPermission());
        permissions.addAll(permissionService.getManagerOther());
        return ResponseEntity.ok(permissions);
    }

}
