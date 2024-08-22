package com.example.demo.menu2.model;

import jakarta.persistence.*;

@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long dayId;

    private String chosenMenu;

    private int repasRating;

    private int serviceRating;

    private int propreteRating;

    private String feedback;

    public Object getDayId() {
        return dayId;
    }

    // Getters and Setters
}

