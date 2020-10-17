import { Injectable } from '@angular/core';
import { Order, OrderDTO } from '../model/order.model';
import { DataBaseService } from './data-base.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private dataBaseService: DataBaseService) { }

  getOrders(): Order[] {
    return this.dataBaseService.getOrders();
  }

  getOrdersDTO(): OrderDTO[] {
    return this.dataBaseService.getOrderDTO();
  }

}
