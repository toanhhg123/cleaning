package com.clean.app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.clean.app.services.UploadService;

import jakarta.annotation.Resource;

@SpringBootApplication
public class AppApplication implements CommandLineRunner {

	@Resource
	UploadService uploadService;

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

	@Override
	public void run(String... arg) throws Exception {
		uploadService.init();
	}

}
