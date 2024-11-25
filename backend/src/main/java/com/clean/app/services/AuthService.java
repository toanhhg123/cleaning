package com.clean.app.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.clean.app.auth.AuthRequest;
import com.clean.app.auth.JwtService;
import com.clean.app.dto.AuthResponse;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthService {
    private final JwtService jwtService;
    private AuthenticationManager authenticationManager;

    /**
     * Login to the system.
     *
     * <p>
     * This method takes the email and password of the user, and authenticates them.
     * If the authentication is
     * successful, it generates a JWT token and returns an {@link AuthResponse}
     * containing the token.
     *
     * @param email    the email of the user
     * @param password the password of the user
     * @return the authentication response containing the JWT token
     */
    public AuthResponse login(AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

        if (!authentication.isAuthenticated())
            throw new UsernameNotFoundException(authRequest.getEmail());

        String token = jwtService.generateToken(authentication);

        return AuthResponse.builder().accessToken(token).build();
    }
}
