package com.clean.app.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clean.app.auth.AuthChangePassword;
import com.clean.app.auth.AuthRegister;
import com.clean.app.auth.AuthRequest;
import com.clean.app.dto.AuthResponse;
import com.clean.app.entity.User;
import com.clean.app.services.AuthService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {
    private final AuthService authService;

    // api login
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest authRequest) {
        return ResponseEntity.ok(authService.login(authRequest));
    }

    // api register
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody AuthRegister authRequest) {
        return ResponseEntity.ok(authService.register(authRequest));
    }

    // api change password
    @PostMapping("/change-password")
    public ResponseEntity<User> changePassword(@RequestBody AuthChangePassword authRequest) {
        return ResponseEntity.ok(authService.changePassword(authRequest));
    }
}
