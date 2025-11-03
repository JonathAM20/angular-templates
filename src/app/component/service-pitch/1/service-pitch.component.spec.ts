import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePitchComponent } from './service-pitch.component';

describe('ServicePitchComponent', () => {
  let component: ServicePitchComponent;
  let fixture: ComponentFixture<ServicePitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
