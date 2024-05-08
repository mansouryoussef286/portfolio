import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from './Carousel/Carousel';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons';


class Problem {
	Title?: string;
	Description?: string;
	ImgSrc?: string;
}

class Solution {
	Title?: string;
	Description?: string;
	ImgSrc?: string;
	Icon?: any;
}

@Component({
	selector: 'app-problem-solution',
	standalone: true,
	imports: [CommonModule, CarouselComponent, FontAwesomeModule],
	templateUrl: './problem-solution.component.html',
	styleUrl: './problem-solution.component.scss'
})
export class ProblemSolutionComponent {
	Icons = {
		faLaptop: faLaptop,
	};

	problems: Problem[] = [
		{
			Title: 'Finding the Right Talent',
			Description: 'Struggling to recruit and retain top-tier developers who can handle both front-end and back-end needs?',
			ImgSrc: 'assets/Images/Problems/'
		},
		{
			Title: 'Project Management Headaches',
			Description: 'Dreading the complexities of managing multiple developers with different skillsets?',
			ImgSrc: 'assets/Images/Problems/'
		},
		{
			Title: 'Communication Silos',
			Description: 'Concerned about miscommunication between designers, front-end developers, and back-end engineers?',
			ImgSrc: 'assets/Images/Problems/'
		},
	]

	solutions: Solution[] = [
		{
			Title: 'Full-Stack <br>Expertise',
			Description: ' I can handle all aspects of software development, from user-friendly interfaces to robust back-end systems.',
			ImgSrc: 'assets/Images/Solutions/',
			Icon: faLaptop
		},
		{
			Title: 'Proven <br>Track Record',
			Description: 'My experience in both corporate and freelance environments allows me to adapt to your specific needs.',
			ImgSrc: 'assets/Images/Solutions/',
			Icon: faCheckCircle
		},
		{
			Title: 'Team <br>Player',
			Description: `I become an extension of your team, seamlessly integrating into your existing workflow and saving you the time and resources
			required for extensive recruitment.`,
			ImgSrc: 'assets/Images/Solutions/',
			Icon: faTeamspeak
		},
		// {
		// 	Title: 'For <br>Freelancers',
		// 	Description: `I offer consistent, reliable development expertise, eliminating the uncertainty of project flow. My commitment to clear
		// 	communication minimizes scope creep and ensures a smooth, successful project.`,
		// 	ImgSrc: 'assets/Images/Solutions/'
		// },
	]


}
