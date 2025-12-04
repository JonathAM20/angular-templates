import { Component } from '@angular/core';
import { ContactComponent } from "./internal-components/contact/contact.component";
import { VisibilityObserverDirective } from '../../../visibility-observer.directive';

@Component({
  selector: 'app-iconic-contact',
  standalone: true,
  imports: [
    ContactComponent,
    VisibilityObserverDirective
  ],
  templateUrl: './iconic-contact.component.html',
  styleUrl: './iconic-contact.component.css'
})
export class IconicContactComponent {

  isVisible: boolean = false;

  handleVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}