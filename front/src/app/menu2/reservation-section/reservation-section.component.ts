// reservation-section.component.ts
import { Component, OnInit } from '@angular/core';
import { Week } from '../model/week.model';
import { Day } from '../model/day.model';
import { MenuService } from '../menu2.service';
import { Reservation } from '../model/reservation.model';
import { ReservationService } from '../reservation2.service';

@Component({
  selector: 'app-reservation-section',
  templateUrl: './reservation-section.component.html'
})
export class ReservationSectionComponent implements OnInit {

  weeks: Week[] = [];
  days: Day[] = [];
  selectedWeekId: number;
  selectedDay: Day;
  reservation: Reservation = {} as Reservation;
  availableMenus: string[] = ['Entrée', 'Suite', 'Salade', 'Garniture', 'Dessert'];

  constructor(private menuService: MenuService, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.menuService.getWeeks().subscribe(data => {
      this.weeks = data;
    });
  }

  onWeekSelect(): void {
    this.menuService.getDaysByWeek(this.selectedWeekId).subscribe(data => {
      this.days = data;
    });
  }

  onDaySelect(dayId: number): void {
    this.selectedDay = this.days.find(day => day.id === dayId)|| new Day(0, '');
    this.reservation.dayId = dayId;
  }

  getSelectedWeekName(): string {
    const selectedWeek = this.weeks.find(week => week.id === this.selectedWeekId);
    return selectedWeek ? selectedWeek.name : '';
  }

  submitReservation(): void {
    this.reservationService.makeReservation(this.reservation).subscribe();
  }
}
