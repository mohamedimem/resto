// menu-section.component.ts
import { Component, OnInit } from '@angular/core';
import { Day } from '../model/day.model';
import { Week } from '../model/week.model';
import { MenuService } from '../menu2.service';
import { Weeks } from '../model/weeks.model';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html'
})
export class MenuSectionComponent implements OnInit {

  weeks: Week[] = [];
  days: Day[] = [];
  selectedWeekId: number;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getWeeks().subscribe(data => {
      console.log(data);
      this.weeks = data || [];
      console.log(this.weeks);
    },err => {
      console.log("err");

      console.log(err);
     
    });
  }

  addWeek(): void {
    const newWeek = { name: 'Week ' + (this.weeks.length + 1) } as Week;
    this.menuService.addWeek(newWeek).subscribe(week => {
      console.log(week);
      this.weeks.push(week);
    });
  }

  onWeekSelect(): void {
    this.menuService.getDaysByWeek(this.selectedWeekId).subscribe(data => {
      console.log(data);
      this.days = data;

    });
  }

  addDay(): void {
    const newDay = { date: 'Day ' + (this.days.length + 1) } as Day;
    this.menuService.addDay(this.selectedWeekId, newDay).subscribe(day => {
      this.days.push(day);
    });
  }

  getSelectedWeekName(): string {
    const selectedWeek = this.weeks.find(week => week.id === this.selectedWeekId);
    return selectedWeek ? selectedWeek.name : '';
  }
}
