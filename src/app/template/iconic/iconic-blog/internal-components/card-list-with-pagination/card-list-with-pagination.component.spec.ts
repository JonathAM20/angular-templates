import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListWithPaginationComponent } from './card-list-with-pagination.component';

describe('CardListWithPaginationComponent', () => {
  let component: CardListWithPaginationComponent;
  let fixture: ComponentFixture<CardListWithPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListWithPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListWithPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
