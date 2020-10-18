import { Injectable } from '@angular/core';
import { IcecreamType } from '../model/icecreamtype.model';
import { Unit } from '../model/unit.model';
import { DataBaseService } from './data-base.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private dataBaseService: DataBaseService) { }

  getIcecreamTypes(): IcecreamType[] {
    return this.dataBaseService.getIcecreamTypes();
  }

  getUnits(): Unit[] {
    return this.dataBaseService.getUnits();
  }

  addIcecreamType(newIcecreamType): void {
    this.dataBaseService.addIcecreamType(newIcecreamType);
  }

  addUnit(newUnit): void {
    this.dataBaseService.addUnit(newUnit);
  }
}
