package com.example.bean_lifecycle_practice.model;

import org.springframework.stereotype.Component;

@Component
public class Bike implements Vehicle {
    @Override
    public void drive() {
        System.out.println("Bike driving");
    }
}