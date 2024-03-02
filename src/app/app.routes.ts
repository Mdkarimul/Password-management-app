import { Routes } from '@angular/router';
import { HeroComponent } from './home/hero/hero.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './home/home/home.component';
export const routes: Routes = [

{
  path : "" , component : HomeComponent
},
{
  path: "login", component: LoginComponent,

},
{
  path: "signup", component: SignupComponent,
 
}

];
