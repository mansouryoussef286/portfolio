import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PreLoaderComponent } from '../Common/Widgets/Spinners/PreLoader/PreLoader';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlane, faPlus } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '@App/Features/Header/Header';
import { FooterComponent } from '@App/Features/Footer/Footer';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CommonModule, PreLoaderComponent, FontAwesomeModule, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	IsLoaded: boolean = false;
	NoLoader: boolean = false;
	ErrorToast!: number;

	s = faPlane;
	plus = faPlus;
	constructor(
		private Router: Router,
	) { }

	ngOnInit() {
		this.PreLoaderListener();
		this.ScrollUpSub();
		this.CheckIOS();
	}


	PreLoaderListener() {
		const startTime = new Date().getTime();
		// console.log('startTime: ', startTime);

		// for mobile and very slow connections
		setTimeout(() => {
			this.IsLoaded = true;
			setTimeout(() => {
				this.NoLoader = true;
			}, 500);
		}, 5000);
		// Add an event listener to execute code when the window is loaded
		window.addEventListener('load', () => {
			const currentTime = new Date().getTime();
			const elapsedTime = currentTime - startTime;
			// console.log('elapsedTime: ', elapsedTime);

			const minLoadingTime = 1500;
			if (elapsedTime >= minLoadingTime) {
				// console.log('first');
				this.IsLoaded = true;
				setTimeout(() => {
					this.NoLoader = true;
				}, 500);
			} else {
				setTimeout(() => {
					// console.log('scond');
					this.IsLoaded = true;
					setTimeout(() => {
						this.NoLoader = true;
					}, 500);
				}, minLoadingTime - elapsedTime);
			}
		});
	}

	ScrollUpSub() {
		this.Router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				// Scroll to the top of the page when a new route is navigated
				window.scrollTo(0, 0);
			}
		});
	}

	CheckIOS() {
		// Check if the user is using an iOS device
		function isIOS() {
			return /iPad|iPhone|iPod/.test(navigator.userAgent);
		}

		// Add a class to the body if it's an iOS device
		if (isIOS()) {
			document.body.classList.add('ios-device');
		}
	}
}

