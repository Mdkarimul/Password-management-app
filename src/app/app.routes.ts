import { Routes } from '@angular/router';
import { HeroComponent } from './home/hero/hero.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
export const routes: Routes = [

{
  path : "" , component : HeroComponent
},
{
  path: "login", component: LoginComponent,

},
{
  path: "signup", component: SignupComponent,
 
}

];
