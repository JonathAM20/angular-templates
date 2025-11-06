import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicServiceComponent } from './iconic-service.component';

describe('IconicServiceComponent', () => {
  let component: IconicServiceComponent;
  let fixture: ComponentFixture<IconicServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
