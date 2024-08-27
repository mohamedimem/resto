package com.example.demo.menu2.controller;


import com.example.demo.menu2.model.Day;
import com.example.demo.menu2.model.Week;
import com.example.demo.menu2.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/weeks")
    public List<Week> getAllWeeks() {
        return menuService.getAllWeeks();
    }


    //add week
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/weeks")
    public Week addWeek(@RequestBody Week week) {
        return menuService.addWeek(week);
    }


    //add a day to a week
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/weeks/{weekId}/days")
    public Day addDay(@PathVariable("weekId") Long weekId, @RequestBody Day day) {
        return menuService.addDay(weekId, day);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/weeks/{weekId}/days")
    public List<Day> getDaysByWeek(@PathVariable("weekId") Long weekId) {
        return menuService.getDaysByWeek(weekId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/days/{dayId}")
    public void deleteDay(@PathVariable("dayId") Long dayId) {
        menuService.deleteDay(dayId);
    }


    //update a day
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/days/{dayId}")
    public void updateDay(@RequestBody Day day) {
        menuService.updateDay(day);
    }
}

