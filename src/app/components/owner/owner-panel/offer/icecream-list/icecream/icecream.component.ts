import { Component, Input, OnInit } from '@angular/core';
import { IcecreamType } from 'src/app/model/icecreamtype.model';

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent implements OnInit {
  @Input() icecreamType: IcecreamType;

  constructor() { }

  ngOnInit(): void {
  }

}
