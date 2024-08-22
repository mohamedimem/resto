// reservation.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from './model/reservation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',   "Access-Control-Allow-Origin": "http://localhost:4200",})};
const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:4200/api/reservations';

  constructor(private http: HttpClient) { }

  makeReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/`, reservation,{ headers, responseType: 'json' });
  }

  getReservationsByDay(dayId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/day/${dayId}`,{ headers, responseType: 'json' });
  }

  updateReservation(reservation: Reservation): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${reservation.id}`, reservation,{ headers, responseType: 'json' });
  }
}
