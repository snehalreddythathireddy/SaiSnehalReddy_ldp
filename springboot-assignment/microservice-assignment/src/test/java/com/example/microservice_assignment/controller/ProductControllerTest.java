package com.example.microservice_assignment.controller;

import com.example.microservice_assignment.model.Product;
import com.example.microservice_assignment.service.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ProductController.class)
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private ProductService productService;

    @Test
    void getAllProducts_returnsProducts() throws Exception {
        when(productService.getAllProducts()).thenReturn(List.of(new Product("Pen", 10.0)));

        mockMvc.perform(get("/products"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Pen"))
                .andExpect(jsonPath("$[0].price").value(10.0));
    }

    @Test
    void getProductById_whenFound_returnsProduct() throws Exception {
        when(productService.getProductById(1L)).thenReturn(Optional.of(new Product("Pen", 10.0)));

        mockMvc.perform(get("/products/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Pen"));
    }

    @Test
    void getProductById_whenMissing_returnsNotFound() throws Exception {
        when(productService.getProductById(99L)).thenReturn(Optional.empty());

        mockMvc.perform(get("/products/99"))
                .andExpect(status().isNotFound());
    }

    @Test
    void createProduct_withValidBody_returnsCreated() throws Exception {
        when(productService.createProduct(any(Product.class))).thenReturn(new Product("Pen", 10.0));

        mockMvc.perform(post("/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Pen\",\"price\":10.0}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Pen"));
    }

    @Test
    void createProduct_withInvalidBody_returnsBadRequest() throws Exception {
        mockMvc.perform(post("/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"\",\"price\":0}"))
                .andExpect(status().isBadRequest());

        verify(productService, never()).createProduct(any(Product.class));
    }

    @Test
    void updateProduct_withValidBody_returnsOk() throws Exception {
        when(productService.updateProduct(eq(1L), any(Product.class))).thenReturn(new Product("Pencil", 5.0));

        mockMvc.perform(put("/products/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Pencil\",\"price\":5.0}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Pencil"));
    }

    @Test
    void updateProduct_withInvalidBody_returnsBadRequest() throws Exception {
        mockMvc.perform(put("/products/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"\",\"price\":-1}"))
                .andExpect(status().isBadRequest());

        verify(productService, never()).updateProduct(any(Long.class), any(Product.class));
    }

    @Test
    void deleteProduct_returnsNoContent() throws Exception {
        mockMvc.perform(delete("/products/1"))
                .andExpect(status().isNoContent());

        verify(productService).deleteProduct(1L);
    }
}
