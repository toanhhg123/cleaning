package com.clean.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.clean.app.auth.JwtAuthenticationEntryPoint;
import com.clean.app.auth.JwtAuthenticationFilter;
import com.clean.app.auth.UserDetailsServiceImpl;

import lombok.AllArgsConstructor;

@Configuration
@EnableMethodSecurity
@AllArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter authenticationFilter;
    private final UserDetailsServiceImpl userDetailsServiceImpl;
    private final JwtAuthenticationEntryPoint authenticationEntryPoint;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsServiceImpl);
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.disable())
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorize -> {
                    authorize.requestMatchers("/api/auth/**").permitAll();
                    authorize.requestMatchers(HttpMethod.POST, "/api/users", "/api/contact").permitAll();
                    authorize
                            .requestMatchers(HttpMethod.GET, "/api/upload/files/{filename:.+}",
                                    "/api/payment/vnpay-payment",
                                    "/api/services/**"

                            )
                            .permitAll();
                    authorize.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll();
                    authorize.anyRequest().authenticated();
                }).httpBasic(Customizer.withDefaults());

        http.exceptionHandling(exception -> exception
                .authenticationEntryPoint(authenticationEntryPoint));
        http.addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
