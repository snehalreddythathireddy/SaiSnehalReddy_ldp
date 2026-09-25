package com.example.spring_security_practice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, unsecured world!";
    }
    @GetMapping("/admin")
    public String adminOnly() {
        return "Welcome, Admin!";
    }
    @GetMapping("/delete-data")
    public String deleteData() {
        return "Data deleted!";
    }
    @org.springframework.web.bind.annotation.PostMapping("/create-something")
    public String createSomething() {
        return "Something created!";
    }
}