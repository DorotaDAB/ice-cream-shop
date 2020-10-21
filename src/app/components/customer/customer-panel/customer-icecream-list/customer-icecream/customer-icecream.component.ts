import { Component, Input, OnInit } from '@angular/core';
import { IcecreamType } from 'src/app/model/icecreamtype.model';

@Component({
  selector: 'app-customer-icecream',
  templateUrl: './customer-icecream.component.html',
  styleUrls: ['./customer-icecream.component.css']
})
export class CustomerIcecreamComponent implements OnInit {
  @Input() icecreamType: IcecreamType;
  @Input() flavour: IcecreamType;

  constructor() { }

  ngOnInit(): void {
  }

}
