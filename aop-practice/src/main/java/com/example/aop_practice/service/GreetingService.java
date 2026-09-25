package com.example.aop_practice.service;

import org.springframework.stereotype.Service;

@Service
public class GreetingService {

    public String greet(String name) {
        return "Hello, " + name + "!";
    }
    public String riskyGreet(String name) {
        if (name.equals("error")) {
            throw new RuntimeException("Invalid name!");
        }
        return "Risky hello, " + name + "!";
    }
    public String farewell(String name) {
        return "Goodbye, " + name + "!";
    }
    public String outerGreet(String name) {
        System.out.println("Inside outerGreet, about to call greet() internally...");
        return greet(name); // self-invocation - bypasses the proxy!
    }
}