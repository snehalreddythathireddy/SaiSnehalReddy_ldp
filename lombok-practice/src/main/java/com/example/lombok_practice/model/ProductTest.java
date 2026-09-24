package com.example.lombok_practice.model;

public class ProductTest {
    public static void main(String[] args) {
        Product product1 = new Product();
        product1.setName("Laptop");
        product1.setPrice(50000.0);

        Product product2 = new Product("Phone", 20000.0);

        System.out.println("Product 1: " + product1.getName() + ", " + product1.getPrice());
        System.out.println("Product 2: " + product2.getName() + ", " + product2.getPrice());
        Category category = new Category();
        category.setId(1);
        category.setName("Electronics");
        System.out.println(category);
    }
}