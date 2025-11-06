import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicAboutComponent } from './iconic-about.component';

describe('IconicAboutComponent', () => {
  let component: IconicAboutComponent;
  let fixture: ComponentFixture<IconicAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
