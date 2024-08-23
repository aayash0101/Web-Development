package com.example.html.backend.repository;

import com.example.html.backend.entity.BikeBookingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BikeBookingRepository extends JpaRepository<BikeBookingEntity,Integer> {
}
