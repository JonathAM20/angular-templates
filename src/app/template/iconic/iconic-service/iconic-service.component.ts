import { Component } from '@angular/core';
import { ServicePitchCard1ListComponent } from "./internal-components/service-pitch-card1-list/service-pitch-card1-list.component";
import { ServicePitch } from './internal-components/service-pitch';
import { Testimonial1Component } from "./internal-components/testimonial1/testimonial1.component";
import { VisibilityObserverDirective } from '../../../visibility-observer.directive';

@Component({
  selector: 'app-iconic-service',
  standalone: true,
  imports: [
    ServicePitchCard1ListComponent,
    Testimonial1Component,
    VisibilityObserverDirective
  ],
  templateUrl: './iconic-service.component.html',
  styleUrl: './iconic-service.component.css'
})
export class IconicServiceComponent {

  isVisible: boolean = false;

  handleVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

  servicePitchList: ServicePitch[] = [
    {
      id: 1,
      title: 'Data Analytics',
      subTitle: '',
      message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.',
      urlImage: 'iconic/images/icone-1.png',
      urlContent: '#'
    },
    {
      id: 2,
      title: 'Market Analysis',
      subTitle: '',
      message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.',
      urlImage: 'iconic/images/icone-2.png',
      urlContent: '#'
    },
    {
      id: 3,
      title: 'Customer Support',
      subTitle: '',
      message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.',
      urlImage: 'iconic/images/icone-3.png',
      urlContent: '#'
    }
    ,
    {
      id: 4,
      title: 'Data Analytics',
      subTitle: '',
      message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.',
      urlImage: 'iconic/images/icone-1.png',
      urlContent: '#'
    },
    {
      id: 5,
      title: 'Market Analysis',
      subTitle: '',
      message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.',
      urlImage: 'iconic/images/icone-2.png',
      urlContent: '#'
    },
    {
      id: 6,
      title: 'Customer Support',
      subTitle: '',
      message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.',
      urlImage: 'iconic/images/icone-3.png',
      urlContent: '#'
    }
  ]

}
