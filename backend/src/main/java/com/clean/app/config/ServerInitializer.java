package com.clean.app.config;

import com.clean.app.entity.User;
import com.clean.app.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ServerInitializer implements ApplicationRunner {
    private  final UserRepository userRepository;
    private  final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(ApplicationArguments args) throws Exception {
        User userAdmin = userRepository.findByEmail("admin@gmail.com").orElse(null);

        if(userAdmin == null) {

            userAdmin = User.builder()
                    .email("admin@gmail.com")
                    .password(passwordEncoder.encode("admin"))
                    .phoneNumber("0912384123")
                    .role("admin")
                    .fullName("admin")
                    .address("")
                    .code("")
                    .build();

            userRepository.save(userAdmin);

        }

        var employee = userRepository.findByEmail("employee@gmail.com").orElse(null);

        if(employee == null) {
            employee = User.builder()
                    .email("employee@gmail.com")
                    .password(passwordEncoder.encode("employee"))
                    .phoneNumber("09123938493")
                    .role("employee")
                    .fullName("employee")
                    .address("")
                    .code("")
                    .build();

            userRepository.save(employee);
        }

        var customer = userRepository.findByEmail("customer@gmail.com").orElse(null);

        if(customer == null) {
            customer = User.builder()
                    .email("customer@gmail.com")
                    .password(passwordEncoder.encode("customer"))
                    .phoneNumber("0912382323")
                    .role("customer")
                    .fullName("customer")
                    .address("")
                    .code("")
                    .build();

            userRepository.save(customer);
        }
    }
}
