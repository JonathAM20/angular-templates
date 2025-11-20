import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPlan } from '../pricing-plan';

@Component({
  selector: 'app-pricing-plan-card-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pricing-plan-card-list.component.html',
  styleUrl: './pricing-plan-card-list.component.css'
})
export class PricingPlanCardListComponent implements OnInit, OnDestroy {

  @Input() pricingPlanList: PricingPlan[] = [];

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
