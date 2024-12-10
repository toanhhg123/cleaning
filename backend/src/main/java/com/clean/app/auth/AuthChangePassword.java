package com.clean.app.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthChangePassword {
    private String email;
    private String password;
    private String newPassword;

}