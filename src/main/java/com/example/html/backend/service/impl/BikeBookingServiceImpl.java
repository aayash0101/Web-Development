package com.example.html.backend.service.impl;

import com.example.html.backend.entity.BikeBookingEntity;
import com.example.html.backend.entity.BikeRentalEntity;
import com.example.html.backend.entity.RegistrationEntity;
import com.example.html.backend.pojo.BikeBookingPojo;
import com.example.html.backend.repository.BikeBookingRepository;
import com.example.html.backend.repository.BikeRentalRepository;
import com.example.html.backend.repository.RegistrationRepository;
import com.example.html.backend.service.BikeBookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BikeBookingServiceImpl implements BikeBookingService {
    private final BikeBookingRepository bikeBookingRepository;

    private final BikeRentalRepository bikeRentalRepository;
    private final RegistrationRepository registrationRepository;
    @Override
    public void saveBikeBooking(BikeBookingPojo bikeBookingPojo) {
        BikeBookingEntity bikeBookingEntity = new BikeBookingEntity();
        bikeBookingEntity.setTotalAmount(bikeBookingPojo.getTotalAmount());

        BikeRentalEntity bikeRentalEntity = bikeRentalRepository.findById(bikeBookingPojo.getBikeId()).orElse(null);
        RegistrationEntity registrationEntity = registrationRepository.findById(bikeBookingPojo.getUserId()).orElse(null);

        if (bikeRentalEntity != null && registrationEntity != null) {
            bikeBookingEntity.setBike_Adding(bikeRentalEntity);
            bikeBookingEntity.setRegistration(registrationEntity);
        }
            bikeBookingEntity.setRentalStartdateTime(bikeBookingPojo.getRentalStartdateTime());
            bikeBookingEntity.setRentalEnddateTime(bikeBookingPojo.getRentalEnddateTime());
            bikeBookingRepository.save(bikeBookingEntity);

    }

    @Override
    public List<BikeBookingEntity> getAllBikeBooking() {
        return bikeBookingRepository.findAll();

    }

    @Override
    public Optional<BikeBookingEntity> getBikeBookingById(Integer id) {
        return bikeBookingRepository.findById(id);

    }

    @Override
    public void deleteBikeBooking(Integer id) {
        bikeBookingRepository.deleteById(id);
    }
}
