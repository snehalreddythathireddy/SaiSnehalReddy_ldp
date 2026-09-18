package com.example.bean_lifecycle_practice.model;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class VehicleUser {

    private final Vehicle vehicle;

    public VehicleUser(@Qualifier("bike") Vehicle vehicle) {
        this.vehicle = vehicle;
        System.out.println("VehicleUser got: " + vehicle);
    }
}