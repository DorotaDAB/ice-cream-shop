import { Injectable } from '@angular/core';
import { Order, OrderDTO, OrderItemDailySummaryDTO } from '../model/order.model';
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

  getOrdersByCustomer(custmerId: number): OrderDTO[] {
    return this.dataBaseService.getCustomerOrderDTO(custmerId);
  }

  getOrdersSummaryByDate(): OrderItemDailySummaryDTO[] {
    return this.dataBaseService.getOrderItemDailySummaryDTO();
  }

}
