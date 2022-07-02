import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor:string = 'sin valor'): Heroe[] {

    if( ordenarPor === 'sin valor' ) {
      return heroes;
    } 
    heroes = heroes.sort(
      (a:any,b:any) => (a[ordenarPor] > b[ordenarPor]) ? 1 : -1)
    return heroes;
  }

}
