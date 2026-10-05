package com.example.order_service.controller;

import com.example.order_service.model.Order;
import com.example.order_service.model.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class OrderController {

    private final RestTemplate restTemplate;

    public OrderController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/orders/{productId}")
    public Order createOrder(@PathVariable int productId) {
        String productServiceUrl = "http://localhost:8081/products/" + productId;

        Product product = restTemplate.getForObject(productServiceUrl, Product.class);

        System.out.println("Fetched product: " + product.getName() + ", price: " + product.getPrice());

        return new Order(101, productId, 2);
    }
}