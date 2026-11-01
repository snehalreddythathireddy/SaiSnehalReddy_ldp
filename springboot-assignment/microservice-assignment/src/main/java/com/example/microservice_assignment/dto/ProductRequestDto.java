package com.example.microservice_assignment.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

public class ProductRequestDto {

    @NotBlank(message = "name is required")
    private String name;

    @Positive(message = "price must be greater than 0")
    private double price;

    public ProductRequestDto() {}

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public double getPrice() { return price; }

    public void setPrice(double price) { this.price = price; }
}
