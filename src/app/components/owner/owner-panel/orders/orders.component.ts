import { Component, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/model/order.model';
import { UserDTO } from 'src/app/model/user.model';
import { OrdersService } from 'src/app/services/orders.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: OrderDTO[] = [];
  customers: UserDTO[] = [];
  selectedCustomer: UserDTO;
  selectedCustomerOrders: OrderDTO[];

  selectCustomer(value: UserDTO): void {
    this.selectedCustomer = value;
    if (value) {
      this.selectedCustomerOrders = this.ordersService.getOrdersByCustomer(this.selectedCustomer.id);
    }
  }


  constructor(private ordersService: OrdersService, private userService: UsersService) {
    this.getOrdersByLatest(ordersService);
    this.getCustomers(userService);
  }

  getOrdersByLatest(ordersService: OrdersService): void {
    this.orders = ordersService.getOrdersDTO()
      .sort(this.numericComparator);
  }

  getCustomers(userService: UsersService): void {
    this.customers = userService.getUsersDTO();
  }

  numericComparator(a: OrderDTO, b: OrderDTO): number {
    return b.orderNumber - a.orderNumber;
  }

  ngOnInit(): void {
  }

}
