import { Injectable } from '@angular/core';
import { CustomerDTO, User, UserDTO } from '../model/user.model';
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

  getCustomersDTO(): UserDTO[] {
    return this.dataBaseService.getCustomersDTO();
  }

  getCustomerDTO(userId: number): CustomerDTO {
    return this.dataBaseService.getCustomerDTO(userId);
  }

}
