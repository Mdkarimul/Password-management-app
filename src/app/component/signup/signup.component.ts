import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, Routes ,Router, ActivatedRoute} from '@angular/router';
import { RoutecontrollService } from '../../services/routecontroll.service';
import { FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import ValidateForm from '../../helpers/validateForm';
import { AdminAuthService } from '../../services/admin-auth.service';
import { AlertService } from '../../services/alert.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavbarComponent,RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  
  constructor(
    public fb:FormBuilder, 
     public auth:AdminAuthService,
    public alert: AlertService,
     public loader : LoadingService
    ){
  
  }



// FORM TOGGLE ----->>>

  public LoginForm!:FormGroup; 
  public SignupForm!:FormGroup;
  @ViewChild(FormGroupDirective)
  private formDir!: FormGroupDirective;
  public controlLoader : boolean = false;

 


public message :string = "karimul";
public value:string = "close";


ngOnInit(): void {

  // SUBSCRIBE TO LOADER SERVICE
  //  this.loader.loadingAction$.subscribe({
  //   next : (result)=>{
  //    this.controlLoader = result;
  //   },
  //  })
  

this.SignupForm = this.fb.group({
full_name : ['',[Validators.required]],
email : ['',[Validators.required,Validators.email]],
mobile : [,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
});


}




// FORM VALIDATORS 
get full_name() { return this.SignupForm.get("full_name"); }
get email() { return this.SignupForm.get("email"); }
get mobile() { return this.SignupForm.get("mobile"); }
get password() { return this.SignupForm.get("password"); }





  // ADMIN SIGNUP HERE ===>>
  adminSignup(event:Event){
 
    event.preventDefault(); 
    if(this.SignupForm.valid){
     
    this.auth.createAdmin(this.SignupForm.value); 
    this.formDir.resetForm();
    }else{
      setTimeout(()=>{
        this.formDir.resetForm();
      },5000);
      ValidateForm.validateAllFormFields(this.SignupForm);
      this.alert.showAlert("All fields are required !" ,"Failed");

    }
  }

  

}
