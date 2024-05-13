import { AnimationService } from '@App/Common/Services/Animation.Service';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
  ], templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  RoutePaths = RoutePaths;

  Icons = {
    instagram: faInstagram,
    facebook: faFacebook,
    linkedin: faLinkedin,
    gmail: faEnvelope,
    github: faGithub,
  };


  constructor(private AnimationService: AnimationService) { }

  ngAfterViewInit() {
    this.AnimationService.Home.LandingText();
    // this.AnimationService.Home.MyName();
    this.AnimationService.Home.Socials();
  }
}
