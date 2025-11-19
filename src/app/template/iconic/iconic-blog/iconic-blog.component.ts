import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { CardListWithPaginationComponent } from "./internal-components/card-list-with-pagination/card-list-with-pagination.component";

@Component({
  selector: 'app-iconic-blog',
  standalone: true,
  imports: [
    CommonModule,
    CardListWithPaginationComponent
],
  templateUrl: './iconic-blog.component.html',
  styleUrl: './iconic-blog.component.css'
})
export class IconicBlogComponent implements OnInit, OnDestroy {

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
