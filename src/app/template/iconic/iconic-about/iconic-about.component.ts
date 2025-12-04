import { Component } from '@angular/core';
import { AboutPitch2Component } from "./internal-components/about-pitch2/about-pitch2.component";
import { AboutPitch3Component } from "./internal-components/about-pitch3/about-pitch3.component";
import { Team1Component } from "./internal-components/team1/team1.component";
import { AboutPitch1Component } from "./internal-components/about-pitch1/about-pitch1.component";
import { VisibilityObserverDirective } from '../../../visibility-observer.directive';

@Component({
  selector: 'app-iconic-about',
  standalone: true,
  imports: [
    AboutPitch1Component,
    AboutPitch2Component,
    AboutPitch3Component,
    Team1Component,
    VisibilityObserverDirective
  ],
  templateUrl: './iconic-about.component.html',
  styleUrl: './iconic-about.component.css'
})
export class IconicAboutComponent {

  isVisible: boolean = false;

  handleVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}