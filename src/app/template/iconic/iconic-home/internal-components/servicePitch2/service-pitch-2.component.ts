import { Component } from '@angular/core';
import { VisibilityObserverDirective } from "../../../../../visibility-observer.directive";

@Component({
  selector: 'app-service-pitch-2',
  standalone: true,
  imports: [VisibilityObserverDirective],
  templateUrl: './service-pitch-2.component.html',
  styleUrl: './service-pitch-2.component.css'
})
export class ServicePitch2Component {

  isVisible: boolean = false;

  handleVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}
