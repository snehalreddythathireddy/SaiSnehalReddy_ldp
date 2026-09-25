package com.example.advanced_mappings.repository;

import com.example.advanced_mappings.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}