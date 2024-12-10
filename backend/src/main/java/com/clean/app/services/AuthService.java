package com.clean.app.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.clean.app.auth.AuthChangePassword;
import com.clean.app.auth.AuthRegister;
import com.clean.app.auth.AuthRequest;
import com.clean.app.auth.JwtService;
import com.clean.app.dto.AuthResponse;
import com.clean.app.entity.User;
import com.clean.app.exceptions.ApiError;
import com.clean.app.repository.UserRepository;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthService {
    private final JwtService jwtService;
    private AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final UserService userService;

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

    @Transactional
    public AuthResponse register(AuthRegister authRequest) {
        userRepository
                .findByEmail(authRequest.getEmail())
                .ifPresent(u -> {
                    throw new ApiError(u.getEmail() + " đã tồn tại");
                });

        User user = User.builder()
                .fullName(authRequest.getFullName())
                .phoneNumber(authRequest.getPhoneNumber())
                .email(authRequest.getEmail())
                .password(authRequest.getPassword())
                .role("customer")
                .build();

        userService.createUser(user);

        return login(AuthRequest.builder().email(authRequest.getEmail()).password(authRequest.getPassword()).build());

    }

    @Transactional
    public User changePassword(AuthChangePassword authRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

        if (!authentication.isAuthenticated())
            throw new UsernameNotFoundException(authRequest.getEmail());

        User user = userRepository.findByEmail(authRequest.getEmail())
                .orElseThrow(() -> new ApiError(authRequest.getEmail() + " khong ton tai"));

        user.setPassword(passwordEncoder.encode(authRequest.getNewPassword()));

        userRepository.save(user);

        return user;

    }

}
