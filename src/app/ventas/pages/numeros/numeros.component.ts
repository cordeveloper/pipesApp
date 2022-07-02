import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss']
})
export class NumerosComponent  {

  ventasNetas:number = 253432.5567;
  porcentaje: number = 0.48;

  constructor() { }

}
