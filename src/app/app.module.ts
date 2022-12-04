import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { NavBar1Component } from './nav-bar1/nav-bar1.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';
import { AddCourseComponent } from './add-course/add-course.component';

const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"careers",
    component:CareersComponent
  },
  {
    path:"aboutus",
    component:AboutUsComponent
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"admin",
    component:AdminLoginComponent
  },
  {
    path:"employeelogin",
    component:EmployeeLoginComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"viewcourse",
    component:ViewCourseComponent
  },
  {
    path:"viewfriends",
    component:ViewFriendsComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    NavBar1Component,
    RegistrationComponent,
    ViewCourseComponent,
    ViewFriendsComponent,
    NavBar2Component,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
