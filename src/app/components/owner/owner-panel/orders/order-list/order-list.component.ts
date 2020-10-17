import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() orders: Order[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
