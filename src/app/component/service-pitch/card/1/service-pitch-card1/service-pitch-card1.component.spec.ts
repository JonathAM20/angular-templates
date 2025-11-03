import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicePitchCard1Component } from './service-pitch-card1.component';

describe('ServicePitchCard1Component', () => {
  let component: ServicePitchCard1Component;
  let fixture: ComponentFixture<ServicePitchCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePitchCard1Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServicePitchCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
