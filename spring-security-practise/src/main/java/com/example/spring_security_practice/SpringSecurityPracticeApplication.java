package com.example.spring_security_practice;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class SpringSecurityPracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityPracticeApplication.class, args);
	}
	@Bean
	public CommandLineRunner printHash(PasswordEncoder passwordEncoder) {
		return args -> {
			System.out.println("HASHED PASSWORD: " + passwordEncoder.encode("dbpassword123"));
		};
	}
}
