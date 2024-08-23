package com.example.html.backend.repository;

import com.example.html.backend.entity.BikeRentalEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BikeRentalRepository extends JpaRepository<BikeRentalEntity, Integer> {
}
