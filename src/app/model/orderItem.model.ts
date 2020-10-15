import { Icecream } from './icecream.model';
import { Unit } from './unit.model';

export interface OrderItem {
  icecream: Icecream;
  units: Unit;
}
