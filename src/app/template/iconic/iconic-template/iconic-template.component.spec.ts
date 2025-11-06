import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicTemplateComponent } from './iconic-template.component';

describe('IconicTemplateComponent', () => {
  let component: IconicTemplateComponent;
  let fixture: ComponentFixture<IconicTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
