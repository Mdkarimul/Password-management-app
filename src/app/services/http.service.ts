import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Admin,Login } from '../Model/admin';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient ) { }
public url:string = "http://localhost:3000/users/register";


//get admin from database ==============>
getAdmin() :Observable<Admin[]>{
 return  this.http.get<Admin[]>(this.url);
}


//create admin ====================>
postAdmin(admin:Admin[]):Observable<Admin[]>{
  return this.http.post<Admin[]>(this.url,admin).pipe(
    catchError((error: HttpErrorResponse) => {

      const errorRes = new Error(error.error.message);
    return  throwError(()=>errorRes)
    })
  );
}

  
}
