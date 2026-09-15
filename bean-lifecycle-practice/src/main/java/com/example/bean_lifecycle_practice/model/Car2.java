package com.example.bean_lifecycle_practice.model;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
//@Primary
public class Car2 implements Vehicle {
    @Override
    public void drive() {
        System.out.println("Car2 driving");
    }
}