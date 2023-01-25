import {createFeatureSelector, createSelector} from '@ngrx/store';
import { PokemonState, pokemonsFeatureKey } from "./pokemon.reducer";

export const selectPokemonState = createFeatureSelector<PokemonState>(pokemonsFeatureKey);

export const selectPokemonsList = createSelector(
  selectPokemonState,
  pokemons => pokemons.pokemons
);

export const selectPokemonsTypes = createSelector(
  selectPokemonState,
  pokemons => pokemons.types
);

export const selectPokemon = createSelector(
  selectPokemonState,
  pokemons => pokemons.pokemon
);

export const selectPokemonSpecies = createSelector(
  selectPokemonState,
  pokemons => pokemons.pokemonSpecies
);


