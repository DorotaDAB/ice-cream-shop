import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'src/app/model/unit.model';

@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.css']
})
export class UnitsListComponent implements OnInit {
  @Input() units: Unit[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
