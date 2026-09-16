package com.example.spring_practice.model;

import jakarta.validation.constraints.NotBlank;

public class Person {

    @NotBlank(message = "Name cannot be empty")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}