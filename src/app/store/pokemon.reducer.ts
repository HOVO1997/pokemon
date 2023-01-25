import {createReducer, on} from '@ngrx/store';
import TicketActions from './pokemon.action-types';
import {PokemonInterface} from "@interfaces/pokemon-interface";
import {PokemonSpeciesInterface} from "@interfaces/pokemon-species-interface";

export interface PokemonState {
  pokemons: PokemonInterface[];
  pokemon: PokemonInterface | null;
  pokemonSpecies: PokemonSpeciesInterface | null;
  types: PokemonInterface[];
  ticketErrMessage: string;
}

export const initialTicketState: PokemonState = {
  pokemons: [],
  pokemon: null,
  pokemonSpecies: null,
  types: [],
  ticketErrMessage: ''
};

export const pokemonsFeatureKey = 'pokemons';

export const pokemonsReducer = createReducer(
  initialTicketState,
  on(TicketActions.getPokemonsSuccess, (state, action) => {
    return {
      ...state,
      pokemons: [
        ...state.pokemons,
        {
          id: action.pokemon.id,
          base_experience: action.pokemon.base_experience,
          height: action.pokemon.height,
          weight: action.pokemon.weight,
          order: action.pokemon.order,
          name: action.pokemon.name,
          sprites: action.pokemon.sprites,
          stats: action.pokemon.stats,
          types: action.pokemon.types
        }
      ]
    };
  }),
  on(TicketActions.getPokemonsFailure, (state, action) => {
    return {...state, ticketErrMessage: action.errorMsg};
  }),

  on(TicketActions.getPokemonsTypeSuccess, (state, action) => {
    return {...state, types: action.types.pokemon};
  }),
  on(TicketActions.getPokemonsTypeFailure, (state, action) => {
    return {...state, ticketErrMessage: action.errorMsg};
  }),

  on(TicketActions.getPokemonSuccess, (state, action) => {
    return {...state, pokemon: action.pokemon};
  }),
  on(TicketActions.getPokemonFailure, (state, action) => {
    return {...state, ticketErrMessage: action.errorMsg};
  }),

  on(TicketActions.getPokemonSpeciesSuccess, (state, action) => {
    return {...state, pokemonSpecies: {
        flavor_text_entries: action.pokemonSpecies.flavor_text_entries,
        habitat: action.pokemonSpecies.habitat,
        growth_rate: action.pokemonSpecies.growth_rate,
        color: action.pokemonSpecies.color,
      }};
  }),
  on(TicketActions.getPokemonSpeciesFailure, (state, action) => {
    return {...state, ticketErrMessage: action.errorMsg};
  }),

  on(TicketActions.clearState,() => {
    return {pokemon: null, pokemons: [], pokemonSpecies: null, types: [], ticketErrMessage: ''};
  }),
)
