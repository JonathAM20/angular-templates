import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicContactComponent } from './iconic-contact.component';

describe('IconicContactComponent', () => {
  let component: IconicContactComponent;
  let fixture: ComponentFixture<IconicContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
