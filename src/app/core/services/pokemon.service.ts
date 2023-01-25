import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonInterface} from "@interfaces/pokemon-interface";
import {PokemonSpeciesInterface} from "@interfaces/pokemon-species-interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly baseApi: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {
  }

  public getPokemon(pokemon: number | string): Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>(this.baseApi + 'pokemon/' + pokemon);
  }

  public getPokemonSpecies(pokemonId: number): Observable<PokemonSpeciesInterface> {
    return this.http.get<PokemonSpeciesInterface>(this.baseApi + 'pokemon-species/' + pokemonId);
  }

  public getPokemonsType(typeId: number): Observable<{ pokemon: PokemonInterface[] }> {
    return this.http.get<{ pokemon: PokemonInterface[] }>(this.baseApi + 'type/' + typeId);
  }
}
