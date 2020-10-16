import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Unit } from 'src/app/model/unit.model';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.css']
})
export class UnitDetailsComponent implements OnInit {
  userForm = new FormControl({
    name: new FormControl({value: '', Validators}),
    weightInGrams: new FormControl({value: '', Validators}),
  });
  newUnit: Unit;

  @Output() unitSubmit: EventEmitter<Unit> = new EventEmitter();

  constructor() {}

  onSubmit(f): void {
    this.newUnit = new Unit (f.value.name, f.value.weightInGrams);
    this.unitSubmit.emit(this.newUnit);
  }

  ngOnInit(): void {
  }

}
