import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIcecreamListComponent } from './customer-icecream-list.component';

describe('CustomerIcecreamListComponent', () => {
  let component: CustomerIcecreamListComponent;
  let fixture: ComponentFixture<CustomerIcecreamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerIcecreamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerIcecreamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
