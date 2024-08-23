package com.example.html.backend.service.impl;

import com.example.html.backend.entity.BikeRentalEntity;
import com.example.html.backend.pojo.BikeRentalPojo;
import com.example.html.backend.repository.BikeRentalRepository;
import com.example.html.backend.service.BikeRentalService;
import com.example.html.backend.utils.ImageToBase64Bike;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BikeRentalServiceImpl implements BikeRentalService {

    private final BikeRentalRepository bikeRentalRepository;

    private final String UPLOAD_DIRECTORY =System.getProperty("user.dir")+"/bikefile";

    @Override
    public void saveBikeRental(BikeRentalPojo bikeRentalPojo) throws IOException {
        BikeRentalEntity bikeRentalEntity = new BikeRentalEntity();
        bikeRentalEntity.setId(bikeRentalPojo.getId());
        bikeRentalEntity.setBikeBrand(bikeRentalPojo.getBikeBrand());
        bikeRentalEntity.setSeat(bikeRentalPojo.getSeat());
        bikeRentalEntity.setPrice(bikeRentalPojo.getPrice());

        if(bikeRentalPojo.getBikeImage()!=null){
            Path filesave= Paths.get(UPLOAD_DIRECTORY,bikeRentalPojo.getBikeImage().getOriginalFilename());
            Files.write(filesave,bikeRentalPojo.getBikeImage().getBytes());
            bikeRentalEntity.setBikeImage(bikeRentalPojo.getBikeImage().getOriginalFilename());
        }
        bikeRentalRepository.save(bikeRentalEntity);
    }

    @Override
    public void updateBike(BikeRentalPojo bikeRentalPojo) throws IOException {
        Optional<BikeRentalEntity> optionalBikeRentalEntity = bikeRentalRepository.findById(bikeRentalPojo.getId());

        if (optionalBikeRentalEntity.isPresent()) {
            BikeRentalEntity bikeRentalEntity = optionalBikeRentalEntity.get();
            bikeRentalEntity.setBikeBrand(bikeRentalPojo.getBikeBrand());
            bikeRentalEntity.setSeat(bikeRentalPojo.getSeat());
            bikeRentalEntity.setPrice(bikeRentalPojo.getPrice());

            if (bikeRentalPojo.getBikeImage() != null) {
                Path filesave = Paths.get(UPLOAD_DIRECTORY, bikeRentalPojo.getBikeImage().getOriginalFilename());
                Files.write(filesave, bikeRentalPojo.getBikeImage().getBytes());
                bikeRentalEntity.setBikeImage(bikeRentalPojo.getBikeImage().getOriginalFilename());
            }
            bikeRentalRepository.save(bikeRentalEntity);
        } else {
            throw new IllegalArgumentException("Bike rental with ID " + bikeRentalPojo.getId() + " not found");
        }
    }

    @Override
    public List<BikeRentalEntity> getAllBikeRentals() {
        ImageToBase64Bike imageToBase64Bike=new ImageToBase64Bike();
        List<BikeRentalEntity> bikeRentalEntities = bikeRentalRepository.findAll();
        bikeRentalEntities=bikeRentalEntities.stream().map(bike->{
            bike.setBikeImage(imageToBase64Bike.getImageBase64(bike.getBikeImage()));
            return bike;
        }).collect(Collectors.toList());
        return bikeRentalEntities;
    }

    @Override
    public Optional<BikeRentalEntity> getBikeRentalById(Integer id) {
        return bikeRentalRepository.findById(id);
    }

    @Override
    public void deleteBikeRental(Integer id) {

        bikeRentalRepository.deleteById(id);
    }

}

