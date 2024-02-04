import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink,NavbarComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
