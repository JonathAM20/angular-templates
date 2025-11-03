import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePitchCard1ListComponent } from './service-pitch-card1-list.component';

describe('ServicePitchCard1ListComponent', () => {
  let component: ServicePitchCard1ListComponent;
  let fixture: ComponentFixture<ServicePitchCard1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePitchCard1ListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServicePitchCard1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
