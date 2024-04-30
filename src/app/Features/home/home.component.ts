import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { NgtCanvas } from 'angular-three';
import { SceneComponent } from '../Scene/Scene.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from '../Footer/Footer';
import { CommonModule } from '@angular/common';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { RouterModule } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faMapPin } from '@fortawesome/free-solid-svg-icons';

export class Service {
	Title!: string;
	SubServices!: string[];
}


export class Project {
	Title!: string;
	Description!: string;
	Duties!: string[];
}

export class Experience {
	Title!: string;
	Company!: string;
	Logo!: string;
	Role!: string;
	Description!: string;
	From!: string;
	To!: string;
	Country!: string;
	Duties!: string[];
	Projects!: Project[];
}

export class Tech {
	Title!: string;
	ImgSrc!: string;
	ImgAlt!: string;
}
@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, SceneComponent, FontAwesomeModule, FooterComponent, RouterModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements AfterViewInit {
	readonly SceneGraph = SceneComponent;
	RoutePaths = RoutePaths;

	instagram = faInstagram;
	facebook = faFacebook;
	linkedin = faLinkedin;
	gmail = faEnvelope;
	github = faGithub;

	chevron = faChevronDown;
	pin = faMapPin;

	services: Service[] = [
		{
			Title: 'Frontend Development',
			SubServices: [
				'Building user interfaces',
				'Implementing responsive design'
			]
		},
		{
			Title: 'Backend Development',
			SubServices: [
				'Building APIs (RESTful)',
				'Database management',
				'Server-side logic implementation'
			]
		},
		{
			Title: 'Full-Stack Development',
			SubServices: [
				'Full project lifecycle management',
				'Integration of frontend and backend',
				'Deployment and hosting'
			]
		},
	];

	experiences: Experience[] = [
		{
			Title: 'one',
			Company: 'Ultatel',
			Logo: 'assets/Images/ultatel.png',
			Role: 'Full stack software engineer',
			Description: 'Telecommunication company specialized in VOIP services',
			From: '08/2022',
			To: '03/2024',
			Country: 'Egypt',
			Duties: [
				`Contributed to the development of new projects to expand the company's offerings and increase its competitiveness in the market.`,
				`Enhanced and implemented new features into existing projects to improve functionality and user experience.`,
				`Maintained the operation of multiple projects, including troubleshooting and resolving support issues to ensure optimal system performance.`
			],
			Projects: [{
				Title: 'Dialer CRM',
				Description: '',
				Duties: [
					'Gathered essential information from the product owner to meet the business requirements and effectively translating that into successful implementation using Angular, NestJS and MariaDB.',
					'Contributed to achieving a 10% boost in revenue through its successful development.'
				]
			}]
		},
		{
			Title: 'two',
			Company: 'TPS',
			Logo: 'assets/Images/tps.jpg',
			Role: 'Software engineer',
			Description: 'Software house company subsidiary of AZM KSA specialized in fintech solutions.',
			From: '03/2024',
			To: 'Present',
			Country: 'KSA',
			Duties: [
				`Troubleshooted and resolved support issues to ensure optimal system running performance.`,
			],
			Projects: [{
				Title: 'Tahseel',
				Description: 'Api handling requests from Edaat and Saudi Sadad ',
				Duties: [
					'Worked on production issues in the integration between Tahseel, Edaat and MOJ systems.',
					'Supported in the MsSql database, .Net core Web api and HangFire jobs communicating between multiple services in the background.'
				]
			}]
		}
	];

	techs: Tech[] = [
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/angular.png',
			ImgAlt: 'angular',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/ts.png',
			ImgAlt: 'typescript',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/js.png',
			ImgAlt: 'javascript',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/html.png',
			ImgAlt: 'html',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/css.png',
			ImgAlt: 'css',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/vsc.png',
			ImgAlt: 'visual studio code text editor',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/.net.png',
			ImgAlt: '.net framework',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/.netcore.png',
			ImgAlt: '.net core framework',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/nestjs.png',
			ImgAlt: 'nestjs',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/vs.png',
			ImgAlt: 'visual studio text editor',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/mariadb.png',
			ImgAlt: 'mariadb',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/mongodb.png',
			ImgAlt: 'mongodb',
		},
		{
			Title: '',
			ImgSrc: 'assets/Images/Techs/git.png',
			ImgAlt: 'git version control',
		},

	];

	ngAfterViewInit() {
		this.Animation.LandingText();
		this.Animation.MyName();
		this.Animation.Socials();
	}

	Animation = {
		LandingText: () => {
			const landingText = document.querySelector('.hero .main')!;
			landingText.classList.remove('transition');
			const landingTextObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						landingText.classList.add('transition');
						return;
					}

					landingText.classList.remove('transition');
				});
			});
			landingTextObserver.observe(landingText);
		},

		MyName: () => {
			const landingText = document.querySelector('.hero .name')!;
			landingText.classList.remove('transition');
			const landingTextObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						landingText.classList.add('transition');
						return;
					}

					landingText.classList.remove('transition');
				});
			});
			landingTextObserver.observe(landingText);
		},

		Socials: () => {
			const landingText = document.querySelector('.hero .socials')!;
			landingText.classList.remove('transition');
			const landingTextObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						landingText.classList.add('transition');
						return;
					}

					landingText.classList.remove('transition');
				});
			});
			landingTextObserver.observe(landingText);
		},
	}
}
