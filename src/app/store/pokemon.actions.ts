import {createAction, props} from "@ngrx/store";
import {PokemonInterface} from "@interfaces/pokemon-interface";
import {PokemonSpeciesInterface} from "@interfaces/pokemon-species-interface";

export const getPokemonsStart = createAction("[Get Pokemons] Get Pokemons Start",
  props<{ pokemon: string | number }>());

export const getPokemonsSuccess = createAction("[Get Pokemons] Get Pokemons Success",
  props<{ pokemon: PokemonInterface }>());

export const getPokemonsFailure = createAction("[Get Pokemons] Get Pokemons Failed",
  props<{ errorMsg: string }>());


export const getPokemonsTypeStart = createAction("[Get Pokemons Type] Get Pokemons Type",
  props<{ id: number }>());

export const getPokemonsTypeSuccess = createAction("[Get Filtered Pokemons] Get Pokemons Type",
  props<{ types: { pokemon: PokemonInterface[] } }>());

export const getPokemonsTypeFailure = createAction("[Get Filtered Pokemons] Get Pokemons Type",
  props<{ errorMsg: string }>());


export const getPokemonStart = createAction("[Get Pokemon] Get Pokemon Start",
  props<{ pokemon: string | number }>());

export const getPokemonSuccess = createAction("[Get Pokemon] Get Pokemon Success",
  props<{ pokemon: PokemonInterface }>());

export const getPokemonFailure = createAction("[Get Pokemon] Get Pokemon Failed",
  props<{ errorMsg: string }>());


export const getPokemonSpeciesStart = createAction("[Get Pokemon] Get Pokemon Species Start",
  props<{ id: number }>());

export const getPokemonSpeciesSuccess = createAction("[Get Pokemon] Get Pokemon Species Success",
  props<{ pokemonSpecies: PokemonSpeciesInterface }>());

export const getPokemonSpeciesFailure = createAction("[Get Pokemon] Get Pokemon Species Failed",
  props<{ errorMsg: string }>());

export const clearState = createAction("[Get Filtered Pokemons] Clear State");
