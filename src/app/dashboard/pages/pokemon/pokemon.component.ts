import {Component, OnInit} from '@angular/core';
import {PokemonService} from "@services/pokemon.service";
import {ActivatedRoute, Params} from "@angular/router";
import {HelperService} from "@services/helper.service";
import {Store} from "@ngrx/store";
import PokemonsActions from "@store/pokemon.action-types";
import {Observable} from "rxjs";
import PokemonSelectors from "@store/pokemon.selector-types";
import {PokemonInterface} from "@interfaces/pokemon-interface";
import {PokemonSpeciesInterface} from "@interfaces/pokemon-species-interface";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemon: Observable<PokemonInterface | null> = this.store.select(PokemonSelectors.selectPokemon);
  public pokemonSpecies: Observable<PokemonSpeciesInterface | null> = this.store.select(PokemonSelectors.selectPokemonSpecies);

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    public helperService: HelperService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    const routSnapshot = this.activatedRoute.snapshot.params;
    this.getPokemon(routSnapshot);
    this.getPokemonSpecies(routSnapshot);
  }

  private getPokemon(snapshot: Params): void {
    this.store.dispatch(PokemonsActions.getPokemonStart({pokemon: snapshot['id']}));
  }

  private getPokemonSpecies(snapshot: Params): void {
    this.store.dispatch(PokemonsActions.getPokemonSpeciesStart({id: snapshot['id']}));
  }

}
