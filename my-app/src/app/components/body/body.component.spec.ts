import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterByWordPipe } from 'src/app/pipes/filterByWord/filter-by-word.pipe';
import { OrderByPipe } from 'src/app/pipes/orderBy/order-by.pipe';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyComponent, OrderByPipe, FilterByWordPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
