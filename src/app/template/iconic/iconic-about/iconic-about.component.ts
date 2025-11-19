import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AboutPitch2Component } from "./internal-components/about-pitch2/about-pitch2.component";
import { AboutPitch3Component } from "./internal-components/about-pitch3/about-pitch3.component";
import { Team1Component } from "./internal-components/team1/team1.component";
import { AboutPitch1Component } from "./internal-components/about-pitch1/about-pitch1.component";

@Component({
  selector: 'app-iconic-about',
  standalone: true,
  imports: [
    AboutPitch1Component,
    AboutPitch2Component,
    AboutPitch3Component,
    Team1Component
  ],
  templateUrl: './iconic-about.component.html',
  styleUrl: './iconic-about.component.css'
})
export class IconicAboutComponent implements OnInit, OnDestroy {

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
      rootMargin: '1000px',
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
