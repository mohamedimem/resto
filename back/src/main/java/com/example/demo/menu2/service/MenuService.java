package com.example.demo.menu2.service;



import com.example.demo.menu2.model.Day;
import com.example.demo.menu2.model.Week;
import com.example.demo.menu2.repository.DayRepository;
import com.example.demo.menu2.repository.WeekRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    @Autowired
    private WeekRepository weekRepository;

    @Autowired
    private DayRepository dayRepository;

    public Week addWeek(Week week) {
        return weekRepository.save(week);
    }

    public List<Week> getAllWeeks() {
        return weekRepository.findAll();
    }

    public Day addDay(Long weekId, Day day) {
        Week week = weekRepository.findById(weekId).orElseThrow();
        day.setWeek(week);
        return dayRepository.save(day);
    }

    public List<Day> getDaysByWeek(Long weekId) {
        return weekRepository.findById(weekId).orElseThrow().getDays();
    }

    public void deleteDay(Long dayId) {
        dayRepository.deleteById(dayId);
    }

    public void updateDay(Day day) {
        dayRepository.save(day);
    }
}
