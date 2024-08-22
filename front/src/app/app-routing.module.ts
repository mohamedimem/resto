
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employe/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employe/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employe/update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { RegisterComponenet } from './admin/register/register.component';
import { MenuSectionComponent } from './menu2/menu-section/menu-section.component';
import { ReservationSectionComponent } from './menu2/reservation-section/reservation-section.component';
import { DayMenuComponent } from './menu2/day-menu/day-menu.component';

const routes: Routes = [

  {path:"show-all-employees",component: EmployeeListComponent},
  {path:"add-employee", component: AddEmployeeComponent},
  {path:'', redirectTo: "home", pathMatch:"full"},
  {path:'updating-by-id/:id',component:UpdateEmployeeComponent},
  {path:'details-of-employee/:id',component:ShowDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponenet},
  {path:'login',component:AdminLoginComponent},
  {path:'menu',component:MenuSectionComponent},
  {path:'reservation',component:ReservationSectionComponent},
  { path: 'menu/:weekId/day/:dayId', component: DayMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
