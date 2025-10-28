import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PricingPlan } from '../../pricing-plan';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.css'
})
export class PlanCardComponent {

  @Input() pricingPlan!: PricingPlan;

}
