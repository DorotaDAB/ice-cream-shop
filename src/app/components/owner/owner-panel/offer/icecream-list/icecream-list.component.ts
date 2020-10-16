import { Component, Input, OnInit } from '@angular/core';
import { IcecreamType } from 'src/app/model/icecreamtype.model';
@Component({
  selector: 'app-icecream-list',
  templateUrl: './icecream-list.component.html',
  styleUrls: ['./icecream-list.component.css']
})
export class IcecreamListComponent implements OnInit {
  @Input() icecreamTypes: IcecreamType[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
