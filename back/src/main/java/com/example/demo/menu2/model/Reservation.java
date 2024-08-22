package com.example.demo.menu2;

import jakarta.persistence.*;

import java.util.List;

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

    // Getters and Setters
}

