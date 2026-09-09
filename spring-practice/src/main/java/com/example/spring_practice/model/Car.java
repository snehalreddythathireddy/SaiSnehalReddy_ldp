package com.example.spring_practice.model;

import org.springframework.stereotype.Component;

@Component
public class Car implements Vehicle {
    public Car() {
        System.out.println("Car object created");
    }
    @Override
    public void drive() {
        System.out.println("Car is driving");
    }
}
