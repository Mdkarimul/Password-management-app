import { Injectable, inject } from '@angular/core';
import { Admin, Login } from '../Model/admin';


import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { LoadingService } from './loading.service';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
 



  
  public btnState  = new Subject<boolean>();

  constructor(public alert:AlertService,public loader : LoadingService,private router:Router,private http:HttpService) {
     




  }


  

async createAdmin(adminData:Admin[]){

 this.http.postAdmin(adminData).subscribe({
  next: (data)=>{
    console.log(data)
  },
  error:(error)=>{ 
    this.alert.showAlert(error.message,"Error");
   console.log(error);
  }
 });

  }





  signOut () {

  }



   loginAdmin(loginData:Login)  {
  
   
  }





 



 





}
