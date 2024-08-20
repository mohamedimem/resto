import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:4200/api/v1/admin/';



  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',   "Access-Control-Allow-Origin": "http://localhost:4200",})};
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  login(adminName: string, adminPassword: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      adminName,
      adminPassword
    }, httpOptions,
  );
  }


  register(adminName: string, adminPassword: string): Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/admin/register", {
       "adminName": adminName,
      "adminPassword": adminPassword,
    }, { headers, responseType: 'text' as 'json'  }
    );
  }
}
