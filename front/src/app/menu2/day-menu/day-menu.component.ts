// day-menu.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Day } from '../model/day.model';
import { Week } from '../model/week.model';
import { MenuService } from '../menu2.service';

@Component({
  selector: 'app-day-menu',
  templateUrl: './day-menu.component.html'
})
export class DayMenuComponent implements OnInit {

  day: Day = {} as Day;
  weekId: number;

  constructor(private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const weekIdParam = this.route.snapshot.paramMap.get('weekId');
  const dayIdParam = this.route.snapshot.paramMap.get('dayId');

  // Provide default values or handle the null case explicitly
  this.weekId = weekIdParam ? +weekIdParam : 0;
  const dayId = dayIdParam ? +dayIdParam : 0;
    this.menuService.getDaysByWeek(this.weekId).subscribe(data => {
      this.day = data.find(d => d.id === dayId) || new Day(0, ''); // Provide a default value if undefined
    });
  }
  

  saveDay(): void {
    this.menuService.updateDay(this.day).subscribe();
  }
}
