package com.example.demo.menu2.controller;


import com.example.demo.menu2.model.Day;
import com.example.demo.menu2.model.Week;
import com.example.demo.menu2.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:4200")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @GetMapping("/weeks")
    public List<Week> getAllWeeks() {
        return menuService.getAllWeeks();
    }

    @PostMapping("/weeks")
    public Week addWeek(@RequestBody Week week) {
        return menuService.addWeek(week);
    }

    @PostMapping("/weeks/{weekId}/days")
    public Day addDay(@PathVariable Long weekId, @RequestBody Day day) {
        return menuService.addDay(weekId, day);
    }

    @GetMapping("/weeks/{weekId}/days")
    public List<Day> getDaysByWeek(@PathVariable Long weekId) {
        return menuService.getDaysByWeek(weekId);
    }

    @DeleteMapping("/days/{dayId}")
    public void deleteDay(@PathVariable Long dayId) {
        menuService.deleteDay(dayId);
    }

    @PutMapping("/days/{dayId}")
    public void updateDay(@RequestBody Day day) {
        menuService.updateDay(day);
    }
}

