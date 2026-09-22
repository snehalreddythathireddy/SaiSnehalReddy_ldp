package com.example.hibernate_practice.repository;

import com.example.hibernate_practice.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {

    List<Student> findByName(String name);

    List<Student> findByAgeGreaterThan(int age);

    List<Student> findByNameContainingIgnoreCase(String keyword);
}