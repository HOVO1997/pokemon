import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {HelperService} from "@services/helper.service";
import {PokemonInterface} from "@interfaces/pokemon-interface";

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinglePokemonComponent {
  @Input() pokemon!: PokemonInterface;

  constructor(public helperService: HelperService) {}
}
