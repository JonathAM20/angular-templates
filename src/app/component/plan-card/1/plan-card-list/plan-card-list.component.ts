import { Component, Input } from '@angular/core';
import { PricingPlan } from '../../pricing-plan';
import { CommonModule } from '@angular/common';
import { PlanCardComponent } from "../plan-card/plan-card.component";

@Component({
  selector: 'app-plan-card-list',
  standalone: true,
  imports: [
    CommonModule,
    PlanCardComponent
],
  templateUrl: './plan-card-list.component.html',
  styleUrl: './plan-card-list.component.css'
})
export class PlanCardListComponent {

  @Input() pricingPlanList: PricingPlan[] = [];

}
