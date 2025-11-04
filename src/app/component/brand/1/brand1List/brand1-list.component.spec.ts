import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brand1ListComponent } from './brand1-list.component';

describe('Brand1ListComponent', () => {
  let component: Brand1ListComponent;
  let fixture: ComponentFixture<Brand1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brand1ListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Brand1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
