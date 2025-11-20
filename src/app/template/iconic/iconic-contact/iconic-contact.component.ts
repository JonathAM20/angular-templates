import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ContactComponent } from "../../../contact/contact.component";

@Component({
  selector: 'app-iconic-contact',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './iconic-contact.component.html',
  styleUrl: './iconic-contact.component.css'
})
export class IconicContactComponent implements OnInit, OnDestroy {

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
