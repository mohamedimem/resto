package com.example.demo.menu2.service;

import com.example.demo.menu2.model.Reservation;
import com.example.demo.menu2.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation makeReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public List<Reservation> getReservationsByDay(Long dayId) {
        return reservationRepository.findAll().stream()
                .filter(r -> r.getDayId().equals(dayId))
                .collect(Collectors.toList());
    }

    public void updateReservation(Reservation reservation) {
        reservationRepository.save(reservation);
    }
}

