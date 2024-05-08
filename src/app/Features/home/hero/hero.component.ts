import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class HeroComponent {
  RoutePaths = RoutePaths;

  Icons = {
    instagram: faInstagram,
    facebook: faFacebook,
    linkedin: faLinkedin,
    gmail: faEnvelope,
    github: faGithub,
  };
}
