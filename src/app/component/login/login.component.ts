import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AlertService } from '../../services/alert.service';
import { AdminAuthService } from '../../services/admin-auth.service';
import { LoadingService } from '../../services/loading.service';
import ValidateForm from '../../helpers/validateForm';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    public fb:FormBuilder, 
    public auth:AdminAuthService,
    public alert: AlertService,
    public loader : LoadingService
    ){
  
  }



// FORM TOGGLE ----->>>
  public signupBtnState :boolean  = true;
  public btnText:String = "Signup";
  public loginBtnState : boolean =false;
  public btnState :boolean = false;
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
  
//LOGIN AND SIGNUP FORM CONTROLS===============>>>>
this.LoginForm = this.fb.group({
  email : ['',[Validators.required,Validators.email]],
  password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
});
  
  



}




// FORM VALIDATORS  ================>
get Lemail() { return this.LoginForm.get("email"); }
get Lpassword() { return this.LoginForm.get("password"); }




//admin login ============>
  adminLogin(event:Event){
    event.preventDefault(); 

    if(this.LoginForm.valid){
     console.log(this.LoginForm.value);
     this.auth.loginAdmin(this.LoginForm.value);
    // if(!this.controlLoader){
    //   this.formDir.resetForm();
    // }
    }else{
      
      ValidateForm.validateAllFormFields(this.LoginForm);
      this.alert.showAlert("All fields are required !" ,"Failed");

    }
  }


}
