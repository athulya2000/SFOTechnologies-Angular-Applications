import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
 
  employeeid=""
  password=""

  constructor(private route:Router){}

  readValues=()=>
  {
    let login:any={"employeeid":this.employeeid,"password":this.password}
    console.log(login)
    if (this.employeeid=="1122" && this.password=="12345") {
      this.route.navigate(['/addcourse'])
    } else {
      alert("invalid credentials")
    }
  }
}
