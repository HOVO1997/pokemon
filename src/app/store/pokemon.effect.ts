import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs";
import * as TicketActions from "./pokemon.actions";
import {HttpErrorResponse} from "@angular/common/http";
import {of as observableOf} from 'rxjs';
import {PokemonService} from "@services/pokemon.service";
import {PokemonInterface} from "@interfaces/pokemon-interface";
import {PokemonSpeciesInterface} from "@interfaces/pokemon-species-interface";

@Injectable()
export class PokemonsEffect {

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {
  }

  getPokemons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TicketActions.getPokemonsStart),
      mergeMap(action =>
        this.pokemonService.getPokemon(action.pokemon).pipe(
          map((pokemon: PokemonInterface) => TicketActions.getPokemonsSuccess({pokemon})),
          catchError((response: HttpErrorResponse) =>
            observableOf(TicketActions.getPokemonsFailure({errorMsg: response.error}))
          )
        )
      )
    )
  });

  getPokemon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TicketActions.getPokemonStart),
      mergeMap(action =>
        this.pokemonService.getPokemon(action.pokemon).pipe(
          map((pokemon: PokemonInterface) => TicketActions.getPokemonSuccess({pokemon})),
          catchError((response: HttpErrorResponse) =>
            observableOf(TicketActions.getPokemonFailure({errorMsg: response.error}))
          )
        )
      )
    )
  });

  getPokemonSpecies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TicketActions.getPokemonSpeciesStart),
      mergeMap(action =>
        this.pokemonService.getPokemonSpecies(action.id).pipe(
          map((pokemonSpecies: PokemonSpeciesInterface) => TicketActions.getPokemonSpeciesSuccess({pokemonSpecies})),
          catchError((response: HttpErrorResponse) =>
            observableOf(TicketActions.getPokemonSpeciesFailure({errorMsg: response.error}))
          )
        )
      )
    )
  });

  getPokemonsTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TicketActions.getPokemonsTypeStart),
      mergeMap(action =>
        this.pokemonService.getPokemonsType(action.id).pipe(
          map((types: { pokemon: PokemonInterface[] }) => TicketActions.getPokemonsTypeSuccess({types})),
          catchError((response: HttpErrorResponse) =>
            observableOf(TicketActions.getPokemonsTypeFailure({errorMsg: response.error}))
          )
        )
      )
    )
  });
}
