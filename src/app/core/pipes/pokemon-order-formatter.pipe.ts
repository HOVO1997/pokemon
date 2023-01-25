import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pokemonOrderFormatter'
})
export class PokemonOrderFormatterPipe implements PipeTransform {

  transform(value: number | undefined): string | null {
    if (!value) {
      return null;
    }
    if (value <= 9) {
      return '00' + value;
    } else if (value <= 99) {
      return '0' + value;
    }
    return value ? value.toString() : '';
  }

}
