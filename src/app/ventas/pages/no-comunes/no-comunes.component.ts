import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent implements OnInit {

  nombre:string = 'Susana';
  genero: string = 'femenino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }

  
  // Keyvalue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  constructor(private primengConfig: PrimeNGConfig) { }


  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarCliente() {
    this.nombre = this.nombre==='Susana' ? 'Fernando' : 'Susana';
    if(this.nombre === 'Susana') {
      this.genero = 'femenino';
    } else {
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //Async Pipe
  miObservable = interval(1000);
  myPromise = new Promise( 
    (resolve, reject) => setTimeout( () => resolve('YATA!!'), 5000 )
  )


}
