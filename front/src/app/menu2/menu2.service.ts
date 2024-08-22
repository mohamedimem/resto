import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Week } from './model/week.model';
import { Day } from './model/day.model';


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',   "Access-Control-Allow-Origin": "http://localhost:4200",})};
const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class MenuService {



  private baseUrl = 'http://localhost:8080/api/menu';

  constructor(private http: HttpClient) { }

  getWeeks(): Observable<Week[]> {
    return this.http.get<Week[]>(`${this.baseUrl}/weeks`,
      { headers, responseType: 'json' });
  }

  addWeek(week: Week): Observable<Week> {
    console.log(week);
    return this.http.post<Week>(`${this.baseUrl}/weeks`, week,{ headers, responseType: 'json' });
  }

  getDaysByWeek(weekId: number): Observable<Day[]> {
    console.log(`${this.baseUrl}/weeks/${weekId}/days`);
    return this.http.get<Day[]>(`${this.baseUrl}/weeks/${weekId}/days`,{ headers, responseType: 'json' });
  }

  addDay(weekId: number, day: Day): Observable<Day> {
    return this.http.post<Day>(`${this.baseUrl}/weeks/${weekId}/days`, day,{ headers, responseType: 'json' });
  }

  deleteDay(dayId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/days/${dayId}`,{ headers, responseType: 'json' });
  }

  updateDay(day: Day): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/days/${day.id}`, day,{ headers, responseType: 'json' });
  }
}
