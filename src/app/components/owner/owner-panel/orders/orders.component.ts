import { Component, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/model/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: OrderDTO[] = [];

  constructor(private ordersService: OrdersService) {
    this.getOrdersByLatest(ordersService);
  }

  getOrdersByLatest(ordersService: OrdersService): void {
    this.orders = ordersService.getOrdersDTO()
      .sort(this.numericComparator);
  }

  numericComparator(a: OrderDTO, b: OrderDTO): number {
    return b.orderNumber - a.orderNumber;
  }

  ngOnInit(): void {
  }

}
