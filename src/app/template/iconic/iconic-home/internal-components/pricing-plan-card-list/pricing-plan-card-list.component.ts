import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPlan } from '../pricing-plan';
import { VisibilityObserverDirective } from "../../../../../visibility-observer.directive";

@Component({
  selector: 'app-pricing-plan-card-list',
  standalone: true,
  imports: [
    CommonModule,
    VisibilityObserverDirective
],
  templateUrl: './pricing-plan-card-list.component.html',
  styleUrl: './pricing-plan-card-list.component.css'
})
export class PricingPlanCardListComponent {

  @Input() pricingPlanList: PricingPlan[] = [];

  isVisible: boolean = false;

  handleVisibilityChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}
