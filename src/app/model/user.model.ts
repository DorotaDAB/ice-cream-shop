import { Icecream } from './icecream.model';

export interface User {
  id: number;
  name: string;
  password: string;
  type: string;
  unit?: number;
  favoriteIcecream?: [Icecream];
}
