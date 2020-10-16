import { IcecreamType } from './icecreamtype.model';
import { Unit } from './unit.model';

export class User {
  id: number;
  name: string;
  password: string;
  type: string;
  unit?: Unit;
  favoriteIcecream?: [IcecreamType];

  constructor(name: string, password: string, type: string) {
    this.id = Math.floor(Math.random() * 100000);
    this.name = name;
    this.password = password;
    this.type = type;
  }
}
