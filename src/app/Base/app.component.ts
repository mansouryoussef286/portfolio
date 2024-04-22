import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PreLoaderComponent } from '../Common/Widgets/Spinners/PreLoader/PreLoader';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CommonModule, PreLoaderComponent, FontAwesomeModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	private readonly VAPID_PUBLIC_KEY: string =
		'BHECh-IJilGwLFwpKQhlsHvqT939nhAcVtU4DW63QimcoT0qsdk_po8_QYgrUjercp8hvwiZHSeTwtx-4HT3J2g';
	IsLoaded: boolean = false;
	NoLoader: boolean = false;
	ErrorToast!: number;

	s = faPlane;
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

