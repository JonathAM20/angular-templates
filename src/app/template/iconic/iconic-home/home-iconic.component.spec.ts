import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIconicComponent } from './home-iconic.component';

describe('HomeIconiComponent', () => {
  let component: HomeIconicComponent;
  let fixture: ComponentFixture<HomeIconicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeIconicComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeIconicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
