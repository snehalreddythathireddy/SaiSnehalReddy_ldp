package com.example.order_service_assignment.controller;

import com.example.order_service_assignment.model.Order;
import com.example.order_service_assignment.service.OrderService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(OrderController.class)
class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private OrderService orderService;

    @Test
    void getAllOrders_returnsOrders() throws Exception {
        when(orderService.getAllOrders()).thenReturn(List.of(new Order(1L, 2)));

        mockMvc.perform(get("/orders"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].productId").value(1))
                .andExpect(jsonPath("$[0].quantity").value(2));
    }

    @Test
    void getOrderById_whenFound_returnsOrder() throws Exception {
        when(orderService.getOrderById(1L)).thenReturn(Optional.of(new Order(1L, 2)));

        mockMvc.perform(get("/orders/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.quantity").value(2));
    }

    @Test
    void getOrderById_whenMissing_returnsNotFound() throws Exception {
        when(orderService.getOrderById(99L)).thenReturn(Optional.empty());

        mockMvc.perform(get("/orders/99"))
                .andExpect(status().isNotFound());
    }

    @Test
    void createOrder_withValidBody_returnsCreated() throws Exception {
        when(orderService.createOrder(any(Order.class))).thenReturn(new Order(1L, 2));

        mockMvc.perform(post("/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"productId\":1,\"quantity\":2}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.productId").value(1));
    }

    @Test
    void createOrder_withInvalidBody_returnsBadRequest() throws Exception {
        mockMvc.perform(post("/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"quantity\":0}"))
                .andExpect(status().isBadRequest());

        verify(orderService, never()).createOrder(any(Order.class));
    }

    @Test
    void deleteOrder_returnsNoContent() throws Exception {
        mockMvc.perform(delete("/orders/1"))
                .andExpect(status().isNoContent());

        verify(orderService).deleteOrder(1L);
    }
}
