import { Component, Input, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/model/order.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [DatePipe]
})
export class OrderComponent implements OnInit {
  @Input() order: OrderDTO;

  constructor() {
   }

  ngOnInit(): void {
  }

}
