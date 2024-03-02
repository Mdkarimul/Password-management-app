import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { BrandComponent } from "../brand/brand.component";
import { BenefitComponent } from "../benefit/benefit.component";
import { FeaturesComponent } from "../features/features.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavbarComponent, HeroComponent, BrandComponent, BenefitComponent, FeaturesComponent, TestimonialComponent, FooterComponent]
})
export class HomeComponent {

}
