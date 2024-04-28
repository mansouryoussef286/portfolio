import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { NgtCanvas } from 'angular-three';
import { SceneComponent } from '../Scene/Scene.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from '../Footer/Footer';
import { CommonModule } from '@angular/common';

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
	imports: [CommonModule, SceneComponent, FontAwesomeModule, FooterComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements AfterViewInit {
	readonly SceneGraph = SceneComponent;
	instagram = faInstagram;
	facebook = faFacebook;
	linkedin = faLinkedin;
	gmail = faGoogle;

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
			Role: 'Full stack software engineer',
			Description: 'Telecommunication company specialized in VOIP services',
			From: '',
			To: '',
			Country: '',
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
			Role: 'software engineer',
			Description: 'Software house company subsidiary of AZM KSA specialized in fintech solutions.',
			From: '',
			To: '',
			Country: '',
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
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/.net.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/.netcore.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/angular.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/css.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/git.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/html.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/js.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/mariadb.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/mongodb.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/nestjs.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/ts.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/vs.png',
			ImgAlt: '',
		},
		{
			Title: 'VSC',
			ImgSrc: 'assets/Images/Techs/vsc.png',
			ImgAlt: '',
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
