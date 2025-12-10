import { Component } from '@angular/core';
import { VisibilityObserverDirective } from '../../../../../visibility-observer.directive';

@Component({
  selector: 'app-about-pitch3',
  standalone: true,
  imports: [
    VisibilityObserverDirective
  ],
  templateUrl: './about-pitch3.component.html',
  styleUrl: './about-pitch3.component.css'
})
export class AboutPitch3Component {

  isVisible: boolean = false;

  handleVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}
