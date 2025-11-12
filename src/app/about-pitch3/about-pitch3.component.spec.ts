import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPitch3Component } from './about-pitch3.component';

describe('AboutPitch3Component', () => {
  let component: AboutPitch3Component;
  let fixture: ComponentFixture<AboutPitch3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPitch3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPitch3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
