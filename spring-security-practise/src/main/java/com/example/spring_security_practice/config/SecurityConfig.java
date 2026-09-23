package com.example.spring_security_practice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public org.springframework.security.authentication.AuthenticationManager authenticationManager(
            org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    //@Bean
    //public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
    //  UserDetails user = User.withUsername("snehal")
    //        .password(passwordEncoder.encode("mypassword123"))
    //      .roles("USER")
    //    .build();

    //UserDetails admin = User.withUsername("admin")
    //      .password(passwordEncoder.encode("adminpass123"))
    //    .roles("ADMIN")
    //  .build();

    // return new InMemoryUserDetailsManager(user, admin);
    // }
}