import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from "@services/pokemon.service";
import {Store} from "@ngrx/store";
import {Observable, Subject, takeUntil} from "rxjs";
import PokemonsActions from "@store/pokemon.action-types";
import PokemonSelectors from "@store/pokemon.selector-types";
import {PokemonInterface} from "@interfaces/pokemon-interface";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {
  public pokemonsList: Observable<PokemonInterface[]> = this.store.select(PokemonSelectors.selectPokemonsList);
  public pokemonsCount: number = 20;
  public pokemonsListStartCount: number = 1;
  public searchable: boolean = false;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private pokemonService: PokemonService,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.getPokemonsList(this.pokemonsCount);
    this.typeChangeListener();
  }

  private typeChangeListener(): void {
    this.store.select(PokemonSelectors.selectPokemonsTypes)
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe((pokemons: PokemonInterface[]) => {
        if (pokemons.length) {
          pokemons.forEach((pokemon: PokemonInterface) => {
            this.store.dispatch(PokemonsActions.getPokemonsStart({pokemon: pokemon.pokemon!.name}));
          });
        }
      });
  }

  private getPokemonsList(count: number): void {
    for (let idx = this.pokemonsListStartCount; idx < count; idx++) {
      this.store.dispatch(PokemonsActions.getPokemonsStart({pokemon: idx}));
    }
    this.pokemonsListStartCount = count;
  }

  public onScroll(): void {
    if (this.pokemonsCount > 1008 || this.searchable) {
      return;
    }
    this.pokemonsCount += 20;
    this.getPokemonsList(this.pokemonsCount);
  }

  public onSearch(searchable: string): void {
    this.searchable = !!searchable;
    this.store.dispatch(PokemonsActions.clearState());
    this.pokemonsCount = 20;
    this.pokemonsListStartCount = 1;
    if (searchable) {
      this.store.dispatch(PokemonsActions.getPokemonsStart({pokemon: searchable}));
      return;
    }
    this.getPokemonsList(this.pokemonsCount);
  }

  public onFilter(id: number): void {
    this.store.dispatch(PokemonsActions.clearState());
    if (id === 21) {
      this.searchable = false;
      this.pokemonsCount = 20;
      this.pokemonsListStartCount = 1;
      this.getPokemonsList(this.pokemonsCount);
      return;
    }
    this.searchable = true;
    this.store.dispatch(PokemonsActions.getPokemonsTypeStart({id}));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
