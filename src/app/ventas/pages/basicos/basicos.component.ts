import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'fernando';
  nombreUpper: string = 'FERNANDO';
  nombreString: string = 'FerNandO HerrErA';

  fecha: Date = new Date(); // el dia de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
