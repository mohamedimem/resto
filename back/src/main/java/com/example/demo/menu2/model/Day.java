package com.example.demo.menu2.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.List;


@Entity
public class Day {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String date;

    private String entree;

    @ElementCollection
    private List<String> suite;

    private String salade;

    @ElementCollection
    private List<String> garniture;

    @ElementCollection
    private List<String> dessert;

    @ManyToOne // This annotation indicates that many Days can belong to one Week
    @JoinColumn(name = "week_id") // The foreign key column in the Day table
    private Week week;

    // Constructor
    public Day() {}

    public Day(String date, String entree, List<String> suite, String salade, List<String> garniture, List<String> dessert) {
        this.date = date;
        this.entree = entree;
        this.suite = suite;
        this.salade = salade;
        this.garniture = garniture;
        this.dessert = dessert;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getEntree() {
        return entree;
    }

    public void setEntree(String entree) {
        this.entree = entree;
    }

    public List<String> getSuite() {
        return suite;
    }

    public void setSuite(List<String> suite) {
        this.suite = suite;
    }

    public String getSalade() {
        return salade;
    }

    public void setSalade(String salade) {
        this.salade = salade;
    }

    public List<String> getGarniture() {
        return garniture;
    }

    public void setGarniture(List<String> garniture) {
        this.garniture = garniture;
    }

    public List<String> getDessert() {
        return dessert;
    }

    public void setDessert(List<String> dessert) {
        this.dessert = dessert;
    }

    public Week getWeek() {
        return week;
    }

    public void setWeek(Week week) {
        this.week = week;
    }
}
