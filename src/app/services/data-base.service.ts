import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class DataBaseService {
  users: User[] = [
    new User ('Anna', 'secret', 'owner'),
    new User ('Zyta', 'secret', 'customer'),
    new User ('Jan', 'secret', 'customer'),
  ];

  types: string[] = [ 'customer', 'owner'];

  constructor() { }

  addUser(newUser: User): void {
    this.users.push(newUser);
    console.log('users', this.users);
  }
}
