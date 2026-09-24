package com.example.spring_practice.model;

import org.springframework.stereotype.Component;

@Component
public class Driver {
    private final Vehicle vehicle;

    public Driver(Vehicle vehicle) {
        this.vehicle = vehicle;
        System.out.println("Driver received a vehicle");
        vehicle.drive();
    }
}
