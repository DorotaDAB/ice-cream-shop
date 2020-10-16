import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { IcecreamType } from '../model/icecreamtype.model';
import { Unit } from '../model/unit.model';

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

  icecreamTypes: IcecreamType[] = [
    new IcecreamType ('vanilla'),
    new IcecreamType ('chocolate'),
  ];

  units: Unit[] = [
    new Unit ('small', 250),
    new Unit ('medium', 500),
    new Unit ('big', 1000),
  ];

  constructor() { }

  addUser(newUser: User): void {
    this.users.push(newUser);
  }

  addIcecreamType(newIcecreamType: IcecreamType): void {
    this.icecreamTypes.push(newIcecreamType);
  }

  addUnit(newUnit: Unit): void {
    this.units.push(newUnit);
  }
}
