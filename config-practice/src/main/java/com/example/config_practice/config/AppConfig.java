package com.example.config_practice.config;

import com.example.config_practice.model.Greeting;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    public String getEnvironmentName() {
        return environmentName;
    }

    @Value("${greeting.message:Default Hello Message}")
    private String message;
    @Value("${environment.name:Not Set}")
    private String environmentName;

    @Bean
    public Greeting greeting() {
        return new Greeting(message);
    };
    @Bean
    @org.springframework.context.annotation.Profile("dev")
    public String environmentMarker() {
        return "This is running in DEV mode";
    }
}