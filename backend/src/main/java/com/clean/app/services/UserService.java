package com.clean.app.services;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.clean.app.auth.UserDetailsServiceImplements;
import com.clean.app.entity.User;
import com.clean.app.exceptions.ApiError;
import com.clean.app.repository.UserRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    private UserDetailsServiceImplements getCurrentUserDetails() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new ApiError("No authenticated user found");
        }
        return (UserDetailsServiceImplements) authentication.getPrincipal();
    }

    public User getCurrentUser() {
        var email = getCurrentUserDetails().getEmail();
        return userRepository.findByEmail(email).orElseThrow(() -> new ApiError("User not found"));
    }

    public User createUser(User user) {

        userRepository.findByEmail(user.getEmail())
                .ifPresent(u -> {
                    throw new ApiError(u.getEmail() + " đã tồn tại");
                });

        userRepository.findByPhoneNumber(user.getPhoneNumber())
                .ifPresent(u -> {
                    throw new ApiError(u.getPhoneNumber() + " đã  tồn tại");
                });

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User updateUser(Long id, User userDetails) {
        return userRepository.findById(id).map(user -> {
            user.setFullName(userDetails.getFullName());
            user.setEmail(userDetails.getEmail());
            user.setPhoneNumber(userDetails.getPhoneNumber());
            user.setRole(userDetails.getRole());
            user.setAvatar(userDetails.getAvatar());
            user.setCode(userDetails.getCode());
            user.setAddress(userDetails.getAddress());
            // update password
            log.info("update password ::: {}", userDetails.getPassword());
            if (userDetails.getPassword() != null) {
                user.setPassword(passwordEncoder.encode(userDetails.getPassword()));
            }

            return userRepository.save(user);
        }).orElse(null);
    }

    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
