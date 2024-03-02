import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RoutecontrollService } from '../../services/routecontroll.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public routeControllService:RoutecontrollService) { }
  

}
