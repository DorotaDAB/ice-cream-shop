import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IcecreamType } from 'src/app/model/icecreamtype.model';
import { OrderItem } from 'src/app/model/orderItem.model';
import { CustomerDTO } from 'src/app/model/user.model';

@Component({
  selector: 'app-customer-icecream-list',
  templateUrl: './customer-icecream-list.component.html',
  styleUrls: ['./customer-icecream-list.component.css']
})
export class CustomerIcecreamListComponent implements OnInit {
  @Input() customerDetails: CustomerDTO;
  @Input() allFlavours: IcecreamType[];

  @Output() order: EventEmitter<OrderItem> = new EventEmitter();

  favorite: boolean;
  cart: IcecreamType[] = [];

  constructor() {
  }

  placeOrder(orderItem: OrderItem): void {
    this.order.emit(orderItem);
  }

  ngOnInit(): void {
  }

}
