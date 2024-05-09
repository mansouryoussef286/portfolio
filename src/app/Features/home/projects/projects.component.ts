import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { faChevronDown, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { Experience, Experiences } from '../Data/Experience';
import { Project, Projects } from '../Data/Projects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  Icons = {
    chevron: faChevronDown,
    pin: faMapPin,
  };

  projects: Project[] = Projects;
  experiences: Experience[] = Experiences;
}
