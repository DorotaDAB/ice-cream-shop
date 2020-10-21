import { Component, Input, OnInit } from '@angular/core';
import { IcecreamType } from 'src/app/model/icecreamtype.model';
import { CustomerDTO } from 'src/app/model/user.model';

@Component({
  selector: 'app-customer-icecream-list',
  templateUrl: './customer-icecream-list.component.html',
  styleUrls: ['./customer-icecream-list.component.css']
})
export class CustomerIcecreamListComponent implements OnInit {
  @Input() customerDetails: CustomerDTO;
  @Input() allFlavours: IcecreamType[];
  favorite: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
