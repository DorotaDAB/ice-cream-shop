import { IcecreamType } from './icecreamtype.model';
import { Unit } from './unit.model';

export interface OrderItem {
  icecream: IcecreamType;
  units: Unit;
}
