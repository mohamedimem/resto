package com.example.demo.adminRepository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.adminModel.adminModel;

@Repository
public interface adminRepository extends JpaRepository<adminModel, Long> {

    // Custom query to find admin by name
    Optional<adminModel> findByAdminName(String adminName);
}
