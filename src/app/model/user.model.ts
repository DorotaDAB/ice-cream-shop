import { Icecream } from './icecream.model';

export class User {
  id: number;
  name: string;
  password: string;
  type: string;
  unit?: number;
  favoriteIcecream?: [Icecream];

  constructor(name: string, password: string, type: string) {
    this.id = Math.floor(Math.random() * 100000);
    this.name = name;
    this.password = password;
    this.type = type;
  }
}
