import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { NgtCanvas } from 'angular-three';
import { SceneComponent } from '../Scene/Scene.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from '../Footer/Footer';
import { CommonModule } from '@angular/common';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { RouterModule } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { AnimationService } from '@App/Common/Services/Animation.Service';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProblemSolutionComponent } from './problem-solution/problem-solution.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { Experience, Experiences } from './Data/Experience';
import { Project, Projects } from './Data/Projects';


@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		CommonModule,
		SceneComponent,
		FontAwesomeModule,
		FooterComponent,
		RouterModule,
		ProjectCardComponent,
		ProblemSolutionComponent,
		AboutComponent,
		HeroComponent
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements AfterViewInit {
	readonly SceneGraph = SceneComponent;
	RoutePaths = RoutePaths;

	Icons = {
		// instagram: faInstagram,
		// facebook: faFacebook,
		// linkedin: faLinkedin,
		// gmail: faEnvelope,
		// github: faGithub,
		chevron: faChevronDown,
		pin: faMapPin,
	};

	experiences: Experience[] = Experiences;
	projects: Project[] = Projects;

	constructor(private AnimationService: AnimationService) { }

	ngAfterViewInit() {
		this.AnimationService.Home.LandingText();
		this.AnimationService.Home.MyName();
		this.AnimationService.Home.Socials();
	}
}
