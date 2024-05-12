import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { NgtCanvas } from 'angular-three';
import { SceneComponent } from '../Scene/Scene.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from '../Footer/Footer';
import { CommonModule } from '@angular/common';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { RouterModule } from '@angular/router';
import { AnimationService } from '@App/Common/Services/Animation.Service';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { ProblemSolutionComponent } from './problem-solution/problem-solution.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';


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
		HeroComponent,
		ProjectsComponent
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements AfterViewInit {
	readonly SceneGraph = SceneComponent;
	RoutePaths = RoutePaths;

	constructor(private AnimationService: AnimationService) { }

	ngAfterViewInit() {
		this.AnimationService.Home.LandingText();
		this.AnimationService.Home.MyName();
		this.AnimationService.Home.Socials();
	}
}
