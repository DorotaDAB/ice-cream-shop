import { Component, OnInit } from '@angular/core';
import { IcecreamType } from 'src/app/model/icecreamtype.model';
import { CustomerDTO } from 'src/app/model/user.model';
import { OfferService } from 'src/app/services/offer.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-customer-panel',
  templateUrl: './customer-panel.component.html',
  styleUrls: ['./customer-panel.component.css']
})
export class CustomerPanelComponent implements OnInit {
  // to be changed to dynamic after login added
  sampleCustomerId = 2;
  customerDetails: CustomerDTO;
  allFlavours: IcecreamType[];

  constructor(private usersService: UsersService, private offerService: OfferService) {
    this.customerDetails = this.usersService.getCustomerDTO(this.sampleCustomerId);
    this.allFlavours = this.offerService.getIcecreamTypes();
  }

  ngOnInit(): void {
  }

}
