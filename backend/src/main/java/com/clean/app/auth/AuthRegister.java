package com.clean.app.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthRegister {
    private String fullName;
    private String email;
    private String password;
    private String phoneNumber;

}