import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
 
  employeeid=""
  password=""

  readValues=()=>
  {
    let login:any={"employeeid":this.employeeid,"password":this.password}
    console.log(login)
  }
}
