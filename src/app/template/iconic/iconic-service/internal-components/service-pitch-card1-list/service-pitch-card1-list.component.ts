import { Component, Input } from '@angular/core';
import { ServicePitch } from '../service-pitch';
import { CommonModule } from '@angular/common';
import { VisibilityObserverDirective } from "../../../../../visibility-observer.directive";

@Component({
  selector: 'app-service-pitch-card1-list',
  standalone: true,
  imports: [
    CommonModule,
    VisibilityObserverDirective
  ],
  templateUrl: './service-pitch-card1-list.component.html',
  styleUrl: './service-pitch-card1-list.component.css'
})
export class ServicePitchCard1ListComponent {

  @Input() servicePitchList: ServicePitch[] = [];

  isVisible: boolean = false;

  handleVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}