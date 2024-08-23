package com.example.html.backend.controller;

import com.example.html.backend.entity.BikeBookingEntity;
import com.example.html.backend.pojo.BikeBookingPojo;
import com.example.html.backend.service.BikeBookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/bike")
@RequiredArgsConstructor
public class BikeBookingController {
    private final BikeBookingService bikeBookingService;

    @PostMapping("/bikebooking")
    public void bookBike(@RequestBody BikeBookingPojo bikeBook) {
        bikeBookingService.saveBikeBooking(bikeBook);
    }

    @GetMapping("/rentals")
    public List<BikeBookingEntity> getAllBikeBooking() {
        return bikeBookingService.getAllBikeBooking();
    }

    @GetMapping("/rentals/{id}")
    public Optional<BikeBookingEntity> getBikeBookingById(@PathVariable Integer id) {
        return bikeBookingService.getBikeBookingById(id);
    }
    @DeleteMapping("/rentals/{id}")
    public void deleteBikeBooking(@PathVariable Integer id) {
        bikeBookingService.deleteBikeBooking(id);
    }
}
