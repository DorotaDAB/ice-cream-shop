import { Component, OnInit } from '@angular/core';
import { IcecreamType } from 'src/app/model/icecreamtype.model';
import { OrderDTO } from 'src/app/model/order.model';
import { OrderItem } from 'src/app/model/orderItem.model';
import { CustomerDTO, UserSimpleDTO } from 'src/app/model/user.model';
import { DataBaseService } from 'src/app/services/data-base.service';
import { OfferService } from 'src/app/services/offer.service';
import { OrdersService } from 'src/app/services/orders.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-customer-panel',
  templateUrl: './customer-panel.component.html',
  styleUrls: ['./customer-panel.component.css']
})
export class CustomerPanelComponent implements OnInit {
  // to be changed to dynamic after login added
  sampleCustomerId = 2;
  //
  customerDetails: CustomerDTO;
  allFlavours: IcecreamType[];
  customerOrders: OrderDTO[];

  constructor(private usersService: UsersService,
              private offerService: OfferService,
              private ordersService: OrdersService,
              private databaseService: DataBaseService) {
    this.customerDetails = this.usersService.getCustomerDTO(this.sampleCustomerId);
    this.getAllFlavours();
    this.getCustomerOrders();
  }

  getCustomerOrders(): void {
    this.customerOrders = this.ordersService.getOrdersByCustomer(this.sampleCustomerId)
      .sort(this.numericComparator);
  }

  getAllFlavours(): void {
    this.allFlavours = this.offerService.getIcecreamTypes()
      .sort(this.alphabeticalComparator);
  }

  addOrderItem(orderItem: OrderItem): void {
    const newOrder: OrderDTO = new OrderDTO(null, new UserSimpleDTO(this.customerDetails.id, this.customerDetails.name), null, orderItem);
    this.ordersService.addOrder(newOrder);
    this.getCustomerOrders();
  }

  alphabeticalComparator(a: IcecreamType, b: IcecreamType): number {
    const A = a.flavour.toLowerCase();
    const B = b.flavour.toLowerCase();

    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison;
  }

  numericComparator(a: OrderDTO, b: OrderDTO): number {
    return b.orderId - a.orderId;
  }

  ngOnInit(): void {
  }

}
