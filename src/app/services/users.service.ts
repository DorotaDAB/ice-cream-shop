import { Injectable } from '@angular/core';
import { User, UserDTO } from '../model/user.model';
import { DataBaseService } from './data-base.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private dataBaseService: DataBaseService) { }

  getCustomers(): User[] {
    return this.dataBaseService.getUsers().filter((user) => user.type === 'customer');
  }

  addUser(newUser: User): void {
    this.dataBaseService.addUser(newUser);
  }

  getUsersDTO(): UserDTO[] {
    return this.dataBaseService.getUsersDTO();
  }
}
