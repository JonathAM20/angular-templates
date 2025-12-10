import { Component } from '@angular/core';
import { VisibilityObserverDirective } from '../../../../../visibility-observer.directive';

@Component({
  selector: 'app-about-pitch2',
  standalone: true,
  imports: [
    VisibilityObserverDirective
  ],
  templateUrl: './about-pitch2.component.html',
  styleUrl: './about-pitch2.component.css'
})
export class AboutPitch2Component {

  isVisible: boolean = false;

  handleVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}
