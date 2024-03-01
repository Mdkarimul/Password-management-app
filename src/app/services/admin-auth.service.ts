import { Injectable, inject } from '@angular/core';
import { Admin, Login } from '../Model/admin';


import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { LoadingService } from './loading.service';
import { HttpService } from './http.service';
import { error, log } from 'node:console';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
 



  
  public btnState  = new Subject<boolean>();

  constructor(public alert:AlertService,public loader : LoadingService,private router:Router,private http:HttpService) {
     




  }


  
//create new user here ===>
 createAdmin(adminData:Admin[]){
  this.http.createAdmin(adminData).subscribe({
    next: (data:any)=>{
      alert("success");
     this.alert.showAlert(data.message,"Success");
    },
    error:(error)=>{ 
      this.alert.showAlert(error.message,"Error");
    }
   });
  }





  signOut () {

  }


//login user here ===>
  loginAdmin(loginData:Login[]) {
    this.http.loginAdmin(loginData).subscribe({
      next:(data:any)=>{
        this.alert.showAlert(data.message,"Success");
      },
      error:(error)=>{
        this.alert.showAlert(error.message,"Error");
      }
    });
  }





 



 





}
