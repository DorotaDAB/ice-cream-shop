import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Unit } from 'src/app/model/unit.model';
import { User } from 'src/app/model/user.model';
import { DataBaseService } from 'src/app/services/data-base.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  userForm = new FormControl({
    name: new FormControl({value: '', Validators}),
    password: new FormControl({value: '', Validators}),
    type: new FormControl({value: '', Validators}),
    unit: new FormControl({value: '', Validators})
  });
  types: string[];
  newUser: User;
  units: Unit[];
  chosenUnit: Unit;

  @Output() userSubmit: EventEmitter<User> = new EventEmitter();

  constructor(private dataBaseService: DataBaseService,
              private offerService: OfferService) {
    this.types = this.dataBaseService.getTypes();
    this.units = this.offerService.getUnits();
  }

  onSubmit(f): void {
    this.newUser = this.chosenUnit
      ? new User(null, f.value.userName, f.value.userPassword, f.value.userType, this.chosenUnit, null)
      : new User(null, f.value.userName, f.value.userPassword, f.value.userType, null, null);
    this.userSubmit.emit(this.newUser);
  }

  selectUnit(chosenUnit: Unit): void {
    this.chosenUnit = chosenUnit;
  }

  ngOnInit(): void {
  }
}

