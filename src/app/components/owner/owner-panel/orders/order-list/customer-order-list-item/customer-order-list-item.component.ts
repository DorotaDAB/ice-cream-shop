import { Component, Input, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/model/order.model';
import { UserDTO } from 'src/app/model/user.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-customer-order-list-item',
  templateUrl: './customer-order-list-item.component.html',
  styleUrls: ['./customer-order-list-item.component.css']
})
export class CustomerOrderListItemComponent implements OnInit {
  @Input() selectedCustomer: UserDTO;
  @Input() selectedCustomerOrders: OrderDTO[];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    console.log(this.selectedCustomerOrders);
  }

}
