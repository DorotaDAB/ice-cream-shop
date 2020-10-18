import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderListItemComponent } from './customer-order-list-item.component';

describe('CustomerOrderListItemComponent', () => {
  let component: CustomerOrderListItemComponent;
  let fixture: ComponentFixture<CustomerOrderListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
