import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIcecreamComponent } from './customer-icecream.component';

describe('CustomerIcecreamComponent', () => {
  let component: CustomerIcecreamComponent;
  let fixture: ComponentFixture<CustomerIcecreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerIcecreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerIcecreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
