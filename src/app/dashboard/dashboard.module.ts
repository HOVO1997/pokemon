import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonsComponent} from './pages/pokemons/pokemons.component';
import {PokemonComponent} from './pages/pokemon/pokemon.component';
import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from './pages/pokemons/components/search/search.component';
import {MatInputModule} from "@angular/material/input";
import {FilterSortComponent} from './pages/pokemons/components/filter-sort/filter-sort.component';
import {TypeColorSetterDirective} from "@models/type-color-setter.directive";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SinglePokemonComponent} from './pages/pokemons/components/single-pokemon/single-pokemon.component';
import {PokemonOrderFormatterPipe} from "@pipes/pokemon-order-formatter.pipe";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {PokemonsEffect} from "@store/pokemon.effect";
import * as fromPokemonsReducer from '@store/pokemon.reducer';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent,
  },
  {
    path: ':id',
    component: PokemonComponent,
  }
];

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonComponent,
    SearchComponent,
    FilterSortComponent,
    TypeColorSetterDirective,
    PokemonOrderFormatterPipe,
    SinglePokemonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatSelectModule,
    FormsModule,
    InfiniteScrollModule,
    ScrollingModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    StoreModule.forFeature(
      fromPokemonsReducer.pokemonsFeatureKey,
      fromPokemonsReducer.pokemonsReducer
    ),
    EffectsModule.forFeature([PokemonsEffect]),
  ]
})
export class DashboardModule {
}
