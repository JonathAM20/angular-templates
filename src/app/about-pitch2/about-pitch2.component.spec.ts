import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPitch2Component } from './about-pitch2.component';

describe('AboutPitch2Component', () => {
  let component: AboutPitch2Component;
  let fixture: ComponentFixture<AboutPitch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPitch2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPitch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
