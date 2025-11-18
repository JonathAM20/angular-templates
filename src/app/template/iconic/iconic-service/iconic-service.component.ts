import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ServicePitchCard1ListComponent } from "./internal-components/service-pitch-card1-list/service-pitch-card1-list.component";
import { ServicePitch } from './internal-components/service-pitch';
import { Testimonial1Component } from "./internal-components/testimonial1/testimonial1.component";

@Component({
  selector: 'app-iconic-service',
  standalone: true,
  imports: [
    ServicePitchCard1ListComponent,
    Testimonial1Component
  ],
  templateUrl: './iconic-service.component.html',
  styleUrl: './iconic-service.component.css'
})
export class IconicServiceComponent implements OnInit, OnDestroy {

  isVisible: boolean = false;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) { }

  handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.isVisible = true;
        this.observer.unobserve(this.el.nativeElement);
      }
    });
  }

  ngOnInit(): void {
    const options = {
      root: null,
      rootMargin: '500px',
      threshold: 0.2
    };

    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), options);
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.unobserve(this.el.nativeElement);
    }
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
