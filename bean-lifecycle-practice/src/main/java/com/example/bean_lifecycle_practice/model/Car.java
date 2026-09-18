package com.example.bean_lifecycle_practice.model;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Component;

@Component
// @Scope("prototype")   //
public class Car {

    public Car() {
        System.out.println("1. Constructor called");
    }

    @PostConstruct
    public void init() {
        System.out.println("2. PostConstruct called");
    }

    @PreDestroy
    public void cleanup() {
        System.out.println("3. PreDestroy called");
    }
}