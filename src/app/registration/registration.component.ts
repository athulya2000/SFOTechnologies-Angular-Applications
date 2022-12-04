import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 
employeeid=""
firstname=""
lastname=""
houseno=""
housename=""
streetname=""
pincode=""
district=""
state=""
country=""
mobile=""
email=""
parentname=""
gender=""
highestdegree=""
yearofexp=""
dateofjoining=""
username=""
password=""
confirmpassword=""

readValues=()=>
{
  let data:any={"employeeid":this.employeeid,"firstname":this.firstname,"lastname":this.lastname,"houseno":this.houseno,"housename":this.housename,"streetname":this.streetname,"pincode":this.pincode,"district":this.district,"state":this.state,"country":this.country,"mobile":this.mobile,"email":this.email,"parentname":this.parentname,"gender":this.gender,"highestdegree":this.highestdegree,"yearofexp":this.yearofexp,"dateofjoining":this.dateofjoining,"username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}
  console.log(data)
}

}
