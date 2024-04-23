import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { NgtCanvas } from 'angular-three';
import { SceneComponent } from '../Scene/Scene.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SceneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  readonly SceneGraph = SceneComponent;

}
