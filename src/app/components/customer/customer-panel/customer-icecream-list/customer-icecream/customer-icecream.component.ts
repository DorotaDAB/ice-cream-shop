import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IcecreamType } from 'src/app/model/icecreamtype.model';
import { OrderItem } from 'src/app/model/orderItem.model';
import { Unit } from 'src/app/model/unit.model';

@Component({
  selector: 'app-customer-icecream',
  templateUrl: './customer-icecream.component.html',
  styleUrls: ['./customer-icecream.component.css']
})
export class CustomerIcecreamComponent implements OnInit {
  @Input() icecreamType: IcecreamType;
  @Input() flavour: IcecreamType;
  @Input() orderUnit: Unit;

  @Output() orderAddition: EventEmitter<any> = new EventEmitter();

  orderItem: OrderItem;
  quantity = 0;

  constructor() { }

  addToOrder(): void {
    if (this.icecreamType) {
      this.orderItem = new OrderItem(this.icecreamType, this.orderUnit, this.quantity);
    } else {

      this.orderItem = new OrderItem(this.flavour, this.orderUnit, this.quantity);
    }
    this.orderAddition.emit(this.orderItem);
    this.quantity = 0;
  }

  plusOne(): number {
    return this.quantity++;
  }

  minusOne(): number {
    return this.quantity--;
  }

  ngOnInit(): void {
  }

}
