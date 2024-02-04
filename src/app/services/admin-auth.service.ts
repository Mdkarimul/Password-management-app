import { Injectable, inject } from '@angular/core';
import { Admin, Login } from '../Model/admin';


import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { LoadingService } from './loading.service';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
 



  
  public btnState  = new Subject<boolean>();

  constructor(public alert:AlertService,public loader : LoadingService,private router:Router) {
     




  }


  

async createAdmin(adminData:Admin){

  console.log(adminData);

  }





  signOut () {

  }



   loginAdmin(loginData:Login)  {
  
   
  }





 



 





}
