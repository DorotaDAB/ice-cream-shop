import { IcecreamType } from './icecreamtype.model';
import { Unit } from './unit.model';

export class OrderItem {
  icecreamType: IcecreamType;
  unit: Unit;

  constructor(icecreamType: IcecreamType, unit: Unit) {
    this.icecreamType = icecreamType;
    this.unit = unit;
  }
}
