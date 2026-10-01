package com.example.junit_mockito_practice.controller;

import com.example.junit_mockito_practice.model.Product;
import com.example.junit_mockito_practice.service.ProductNotFoundException;
import com.example.junit_mockito_practice.service.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import tools.jackson.databind.json.JsonMapper;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ProductController.class)
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private ProductService productService;

    @Autowired
    private JsonMapper jsonMapper;

    @Test
    void getAllProducts_returns200AndJsonList() throws Exception {
        when(productService.getAllProducts())
                .thenReturn(List.of(new Product(1, "Mouse", 500.0)));

        mockMvc.perform(get("/api/products"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].name").value("Mouse"));
    }

    @Test
    void getProductById_whenFound_returns200() throws Exception {
        when(productService.getProductById(1)).thenReturn(new Product(1, "Mouse", 500.0));

        mockMvc.perform(get("/api/products/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Mouse"));
    }

    @Test
    void getProductById_whenMissing_returns404() throws Exception {
        when(productService.getProductById(99)).thenThrow(new ProductNotFoundException(99));

        mockMvc.perform(get("/api/products/99"))
                .andExpect(status().isNotFound())
                .andExpect(content().string("Product not found with id: 99"));
    }

    @Test
    void createProduct_returns201AndBody() throws Exception {
        Product request = new Product(0, "Webcam", 1500.0);
        Product saved = new Product(7, "Webcam", 1500.0);
        when(productService.createProduct(any(Product.class))).thenReturn(saved);

        mockMvc.perform(post("/api/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(7));
    }

    @Test
    void createProduct_withBadInput_returns400() throws Exception {
        when(productService.createProduct(any(Product.class)))
                .thenThrow(new IllegalArgumentException("Product name must not be empty"));

        Product request = new Product(0, "", 100.0);

        mockMvc.perform(post("/api/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void updateProduct_returns200AndUpdatedBody() throws Exception {
        Product request = new Product(0, "Mouse Pro", 750.0);
        Product updated = new Product(1, "Mouse Pro", 750.0);
        when(productService.updateProduct(eq(1), any(Product.class))).thenReturn(updated);

        mockMvc.perform(put("/api/products/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Mouse Pro"));
    }

    @Test
    void deleteProduct_returns204() throws Exception {
        mockMvc.perform(delete("/api/products/1"))
                .andExpect(status().isNoContent());
    }
}