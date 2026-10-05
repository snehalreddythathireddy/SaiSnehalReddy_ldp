package com.example.order_service_assignment.repository;

import com.example.order_service_assignment.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}