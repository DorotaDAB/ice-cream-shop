import { Component, Input, OnInit } from '@angular/core';
import { Order, OrderDTO } from 'src/app/model/order.model';
import { UserDTO } from 'src/app/model/user.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() orders: Order[] = [];
  @Input() selectedCustomer: UserDTO;
  @Input() selectedCustomerOrders: OrderDTO[];
  @Input() selectedDate: Date;
  @Input() summaryView: boolean;

  constructor(private ordersService: OrdersService) {
   }

  ngOnInit(): void {
  }

}
