import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  userForm = new FormControl({
    name: new FormControl({value: '', Validators}),
    password: new FormControl({value: '', Validators}),
    type: new FormControl({value: '', Validators})
  });
  types: string[];
  newUser: User;

  @Output() userSubmit: EventEmitter<User> = new EventEmitter();

  constructor(private dataBaseService: DataBaseService) {
    this.types = this.dataBaseService.types;
  }

  onSubmit(f): void {
    this.newUser = new User (f.value.userName, f.value.userPassword, f.value.userType);
    this.userSubmit.emit(this.newUser);
  }

  ngOnInit(): void {
  }
}

