import { IcecreamType } from './icecreamtype.model';
import { Unit } from './unit.model';

export class OrderItem {
  icecreamType: IcecreamType;
  unit: Unit;
  quantity: number;

  constructor(icecreamType: IcecreamType, unit: Unit, quantity: number) {
    this.icecreamType = icecreamType;
    this.unit = unit;
    this.quantity = quantity;
  }
}
