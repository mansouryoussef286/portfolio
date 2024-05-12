import { Component, Input } from '@angular/core';
import { Project } from '../../Data/Projects';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-project-card',
	standalone: true,
	imports: [
		CommonModule,
		FontAwesomeModule
	],
	templateUrl: './project-card.component.html',
	styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

	@Input('Project') project!: Project;
	rotate: boolean = false;

	Icons = {
		github: faGithub,
		externalLink: faExternalLink,
	}

	showMore() {
		this.rotate = !this.rotate;
	}
}
