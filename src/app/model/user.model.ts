import { IcecreamType } from './icecreamtype.model';
import { Unit } from './unit.model';

export class User {
  id: number;
  name: string;
  password: string;
  type: string;
  unit?: Unit;
  favoriteIcecream?: IcecreamType[];

  constructor(id: number, name: string, password: string, type: string, unit: Unit, favoriteIcecream: IcecreamType[]  ) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.type = type;
    this.unit = unit;
    this.favoriteIcecream = favoriteIcecream;
  }
}

export class UserDTO {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class CustomerDTO {
  id: number;
  name: string;
  unit?: Unit;
  favoriteIcecream?: IcecreamType[];

  constructor(id: number, name: string, unit: Unit, favoriteIcecream: IcecreamType[]) {
    this.id = id;
    this.name = name;
    this.unit = unit;
    this.favoriteIcecream = favoriteIcecream;
  }
}
