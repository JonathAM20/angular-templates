import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPitch1Component } from './about-pitch1.component';

describe('AboutPitch1Component', () => {
  let component: AboutPitch1Component;
  let fixture: ComponentFixture<AboutPitch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPitch1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPitch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
