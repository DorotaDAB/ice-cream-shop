import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IcecreamType } from 'src/app/model/icecreamtype.model';
import { Unit } from 'src/app/model/unit.model';
import { OfferService } from 'src/app/services/offer.service';
import { IcecreamDetailsComponent } from './icecream-details/icecream-details.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  icecreamTypes: IcecreamType[] = [];
  units: Unit[] = [];

  constructor(public dialog: MatDialog,
              private offerService: OfferService) {
    this.getSortedIcecreamTypes(offerService);
    this.getSortedUnits(offerService);
  }

  getSortedIcecreamTypes(offerService: OfferService): void {
    this.icecreamTypes = offerService.getIcecreamTypes()
      .sort(this.alphabeticalComparator);
  }

  getSortedUnits(offerService: OfferService): void {
    this.units = offerService.getUnits()
      .sort(this.numericComparator);
  }

  numericComparator(a: Unit, b: Unit): number {
    return a.weightInGrams - b.weightInGrams;
  }

  alphabeticalComparator(a: IcecreamType, b: IcecreamType): number {
    const A = a.flavour.toLowerCase();
    const B = b.flavour.toLowerCase();

    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison;
  }

  addIcecreamTypeDialog(): void {
    const dialogRef = this.dialog.open(IcecreamDetailsComponent);

    dialogRef.componentInstance.icecreamTypeSubmit.subscribe(
      newIcecreamType => {
        this.offerService.addIcecreamType(newIcecreamType);
        this.getSortedIcecreamTypes(this.offerService);
      },
    );
  }

  addUnitDialog(): void {
    const dialogRef = this.dialog.open(UnitDetailsComponent);

    dialogRef.componentInstance.unitSubmit.subscribe(
      newUnit => {
        this.offerService.addUnit(newUnit);
        this.getSortedUnits(this.offerService);
      },
    );
  }

  ngOnInit(): void {
  }

}
