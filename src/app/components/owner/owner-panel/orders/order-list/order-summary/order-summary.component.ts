import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Order, OrderItemDailySummaryDTO } from 'src/app/model/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  @Input() orders: Order[] = [];
  date = new FormControl(new Date());
  selectedDate: Date;
  filteredOrders: OrderItemDailySummaryDTO[];

  constructor(private ordersService: OrdersService) { }

  selectDate(event: MatDatepickerInputEvent<Date>): void {
    this.selectedDate = event.value;
    this.getOrdersSummary(this.selectedDate);
  }

  getOrdersSummary(selecedDate: Date): void {
    this.filteredOrders = this.ordersService.getOrdersSummaryByDate(selecedDate);
  }

  ngOnInit(): void {
  }

}
