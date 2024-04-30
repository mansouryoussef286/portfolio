import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnimationService {
    constructor() { }

    Home = {
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
