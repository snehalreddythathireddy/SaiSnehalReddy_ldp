package com.example.advanced_mappings.repository;

import com.example.advanced_mappings.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClubRepository extends JpaRepository<Club, Long> {
}