import { Component, Input, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/model/order.model';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  @Input() order: OrderDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
