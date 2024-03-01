import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Admin,Login } from '../Model/admin';
import { error } from 'node:console';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient ) { }
public url:string = "http://localhost:3000/users";


//get admin from database ==============>
getAdmin() :Observable<Admin[]>{
 return  this.http.get<Admin[]>(this.url);
}


//create admin ====================>
createAdmin(admin:Admin[]):Observable<Admin[]>{
  return this.http.post<Admin[]>(this.url+"/register",admin).pipe(
    catchError((error: HttpErrorResponse) => {
      const errorRes = new Error(error.error.message);
    return  throwError(()=>errorRes)
    })
  );
}


loginAdmin(admin:Login[]):Observable<Login[]> {
  return this.http.post<Login[]>(this.url+"/login",admin).pipe(
    catchError((error:HttpErrorResponse)=>{
      const errorRes = new Error(error.error.message);
      return  throwError(()=>errorRes)
    })
  )
}

  
}
