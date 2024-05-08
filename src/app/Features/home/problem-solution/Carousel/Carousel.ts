import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-Carousel',
    standalone: true,
    templateUrl: './Carousel.html',
    styleUrls: ['Carousel.scss'],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule
    ]
})

export class CarouselComponent {
    RoutePaths = RoutePaths;

    @Input('Slides') slides!: { ImgSrc?: string; Title?: string; Description?: string }[];

    Icons = {
        faChevronLeft: faChevronLeft,
        faChevronRight: faChevronRight,
    };

    currentIndex = 0;
    Caption = '';
    Intevral!: any;

    constructor() { }

    ngOnInit(): void {
        this.StartInterval();
    }

    onPrevSlide() {
        this.ClearInterval();
        this.prevSlide();
        this.StartInterval();
    }

    onNextSlide() {
        this.ClearInterval();
        this.nextSlide();
        this.StartInterval();
    }

    onGoToSlide(index: number) {
        this.ClearInterval();
        this.goToSlide(index);
        this.StartInterval();
    }

    StartInterval() {
        this.Intevral = setInterval(() => { this.nextSlide() }, 5000);
    }

    ClearInterval() {
        clearInterval(this.Intevral);
    }


    private prevSlide() {
        this.currentIndex = (this.currentIndex === 0) ? (this.slides.length - 1) : (this.currentIndex - 1);
    }

    private nextSlide() {
        this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : (this.currentIndex + 1);
    }

    private goToSlide(index: number) {
        this.currentIndex = index;
    }
}
