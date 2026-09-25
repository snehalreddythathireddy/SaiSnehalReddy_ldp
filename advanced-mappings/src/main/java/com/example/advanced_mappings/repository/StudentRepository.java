package com.example.advanced_mappings.repository;

import com.example.advanced_mappings.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}