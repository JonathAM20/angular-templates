import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPlanCardListComponent } from './pricing-plan-card-list.component';

describe('PricingPlanCardListComponent', () => {
  let component: PricingPlanCardListComponent;
  let fixture: ComponentFixture<PricingPlanCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingPlanCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPlanCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
