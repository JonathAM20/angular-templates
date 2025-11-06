import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicBlogComponent } from './iconic-blog.component';

describe('IconicBlogComponent', () => {
  let component: IconicBlogComponent;
  let fixture: ComponentFixture<IconicBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
