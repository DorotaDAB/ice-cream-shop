import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IcecreamType } from 'src/app/model/icecreamtype.model';

@Component({
  selector: 'app-icecream-details',
  templateUrl: './icecream-details.component.html',
  styleUrls: ['./icecream-details.component.css']
})
export class IcecreamDetailsComponent implements OnInit {
  userForm = new FormControl({
    flavour: new FormControl({value: '', Validators}),
  });
  newIcecreamType: IcecreamType;

  @Output() icecreamTypeSubmit: EventEmitter<IcecreamType> = new EventEmitter();

  constructor() {}

  onSubmit(f): void {
    this.newIcecreamType = new IcecreamType (f.value.flavour);
    this.icecreamTypeSubmit.emit(this.newIcecreamType);
  }

  ngOnInit(): void {
  }

}









