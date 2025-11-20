import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePitch1Component } from './service-pitch-1.component';

describe('ServicePitch1Component', () => {
  let component: ServicePitch1Component;
  let fixture: ComponentFixture<ServicePitch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePitch1Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServicePitch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
