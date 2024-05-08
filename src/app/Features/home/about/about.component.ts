import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Service, Services } from '../Data/Service';
import { Tech, Techs } from '../Data/Tech';
import { Education, Educations } from '../Data/Education';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  services: Service[] = Services;
  techs: Tech[] = Techs;
  educations: Education[] = Educations;

}
