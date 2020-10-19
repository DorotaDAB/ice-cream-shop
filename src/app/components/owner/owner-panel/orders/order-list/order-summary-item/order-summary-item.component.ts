import { Component, Input, OnInit } from '@angular/core';
import { OrderItemDailySummaryDTO } from 'src/app/model/order.model';

@Component({
  selector: 'app-order-summary-item',
  templateUrl: './order-summary-item.component.html',
  styleUrls: ['./order-summary-item.component.css']
})
export class OrderSummaryItemComponent implements OnInit {
  @Input() order: OrderItemDailySummaryDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
