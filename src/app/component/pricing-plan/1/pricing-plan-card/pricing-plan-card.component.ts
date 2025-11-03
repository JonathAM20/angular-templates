import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PricingPlan } from '../../pricing-plan';

@Component({
  selector: 'app-pricing-plan-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pricing-plan-card.component.html',
  styleUrl: './pricing-plan-card.component.css'
})
export class PricingPlanCardComponent {

  @Input() pricingPlan!: PricingPlan;

}
