import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ServicePitch } from '../../../service-pitch';
import { CommonModule } from '@angular/common';
import { ServicePitchCard1Component } from '../service-pitch-card1/service-pitch-card1.component';

@Component({
  selector: 'app-service-pitch-card1-list',
  standalone: true,
  imports: [
    CommonModule,
    ServicePitchCard1Component
  ],
  templateUrl: './service-pitch-card1-list.component.html',
  styleUrl: './service-pitch-card1-list.component.css'
})
export class ServicePitchCard1ListComponent implements OnInit, OnDestroy {

  @Input() servicePitchList: ServicePitch[] = [];

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
      rootMargin: '0px',
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

}
