import { RegisterComponenet } from './admin/register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeListComponent } from './employe/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employe/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';


import { UpdateEmployeeComponent } from './employe/update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MenuSectionComponent } from './menu2/menu-section/menu-section.component';
import { DayMenuComponent } from './menu2/day-menu/day-menu.component';
import { ReservationSectionComponent } from './menu2/reservation-section/reservation-section.component';




@NgModule({
  declarations: [
    MenuSectionComponent,
    ReservationSectionComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    AppComponent,
    DayMenuComponent,
         UpdateEmployeeComponent,
         ShowDetailsComponent,
         AdminLoginComponent,
         RegisterComponenet,
         MenuSectionComponent,
         ReservationSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    HttpClientModule,FormsModule,HomeComponent, BrowserAnimationsModule ,
    MatFormFieldModule, MatInputModule,MatFormFieldModule, MatInputModule, MatDatepickerModule,
     MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
