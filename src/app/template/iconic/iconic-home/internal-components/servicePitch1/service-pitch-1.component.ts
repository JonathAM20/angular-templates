import { Component } from '@angular/core';
import { VisibilityObserverDirective } from "../../../../../visibility-observer.directive";

@Component({
  selector: 'app-service-pitch-1',
  standalone: true,
  imports: [VisibilityObserverDirective],
  templateUrl: './service-pitch-1.component.html',
  styleUrl: './service-pitch-1.component.css'
})
export class ServicePitch1Component {

  isVisible: boolean = false;

  handleVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}
