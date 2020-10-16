import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { DataBaseService } from './data-base.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private dataBaseService: DataBaseService) { }

  getCustomers(): User[] {
    return this.dataBaseService.users.filter((user) => user.type === 'customer');
  }

  addUser(newUser): void {
    this.dataBaseService.addUser(newUser);
  }
}
