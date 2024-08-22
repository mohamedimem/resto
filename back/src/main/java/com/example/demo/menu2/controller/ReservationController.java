package com.example.demo.menu2.controller;


import com.example.demo.menu2.model.Reservation;
import com.example.demo.menu2.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin(origins = "http://localhost:4200")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping("/")
    public Reservation makeReservation(@RequestBody Reservation reservation) {
        return reservationService.makeReservation(reservation);
    }

    @GetMapping("/day/{dayId}")
    public List<Reservation> getReservationsByDay(@PathVariable Long dayId) {
        return reservationService.getReservationsByDay(dayId);
    }

    @PutMapping("/{reservationId}")
    public void updateReservation(@RequestBody Reservation reservation) {
        reservationService.updateReservation(reservation);
    }
}
