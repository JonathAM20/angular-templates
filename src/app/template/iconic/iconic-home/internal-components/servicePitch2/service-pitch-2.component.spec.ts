import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePitch2Component } from './service-pitch-2.component';

describe('ServicePitch2Component', () => {
  let component: ServicePitch2Component;
  let fixture: ComponentFixture<ServicePitch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePitch2Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServicePitch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
