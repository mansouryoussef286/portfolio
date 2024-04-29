import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationSkipped, Router, RouterOutlet } from '@angular/router';
import { PreLoaderComponent } from '../Common/Widgets/Spinners/PreLoader/PreLoader';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlane, faPlus } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '@App/Features/Header/Header';
import { FooterComponent } from '@App/Features/Footer/Footer';
import { Subscription, filter } from 'rxjs';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CommonModule, PreLoaderComponent, FontAwesomeModule, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
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
		this.FragmentScrollSub();
		this.CheckIOS();

	}

	PreLoaderListener() {
		const startTime = new Date().getTime();
		// console.log('startTime: ', startTime);

		const onLoadingFinish = () => {
			if (this.IsLoaded) return; // already loaded

			this.IsLoaded = true;
			const url = this.Router.url;
			console.log('handle scroll');

			setTimeout(() => {
				// waiting for the page to render
				this.handleFragmentScroll(url);
			}, 100);

			setTimeout(() => {
				// waiting for fading css animation 
				this.NoLoader = true;
			}, 500);
		}


		// for mobile and very slow connections
		setTimeout(() => {
			onLoadingFinish();
		}, 5000);

		// Add an event listener to execute code when the window is loaded
		window.addEventListener('load', () => {
			const currentTime = new Date().getTime();
			const elapsedTime = currentTime - startTime;
			// console.log('elapsedTime: ', elapsedTime);

			const minLoadingTime = 1500;
			if (elapsedTime >= minLoadingTime) {
				// console.log('first');
				onLoadingFinish();
			} else {
				setTimeout(() => {
					// console.log('scond');
					onLoadingFinish();
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


	FragmentScrollSub() {
		this.scrollSubscription = this.Router.events.pipe(
			filter(event => event instanceof NavigationEnd || event instanceof NavigationSkipped)
		).subscribe((event: any) => {
			// console.log(event);
			// to scroll even if the route was already scrolled to
			this.handleFragmentScroll(event.urlAfterRedirects || event.url);
		});
	}

	private fragment: string | undefined;
	private scrollSubscription: Subscription | undefined;

	private handleFragmentScroll(url: string) {
		this.fragment = this.getFragmentFromUrl(url);
		this.scrollToAnchor();
	}

	private getFragmentFromUrl(url: string): string | undefined {
		const fragmentIndex = url.indexOf('#');
		return fragmentIndex !== -1 ? url.substring(fragmentIndex + 1) : undefined;
	}

	private scrollToAnchor() {
		if (this.fragment) {
			const element = document.getElementById(this.fragment);
			if (element) {
				// element.scrollIntoView({ behavior: 'smooth', block: 'start',  });

				window.scrollTo({
					behavior: 'smooth',
					top:
						element.getBoundingClientRect().top -
						document.body.getBoundingClientRect().top -
						56,
				})
			}
		}
	}

	ngOnDestroy() {
		if (this.scrollSubscription) {
			this.scrollSubscription.unsubscribe();
		}
	}
}