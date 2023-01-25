import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public readonly pokemonTypes: {id: number, type: string, color: string}[] = [
    {id: 1, type: 'Normal', color: '#d9d9d9'},
    {id: 2, type: 'Fighting', color: '#d56723'},
    {id: 3, type: 'Flying', color: '#00ffe9'},
    {id: 4, type: 'Poison', color: '#b97fc9'},
    {id: 5, type: 'Ground', color: '#ab9842'},
    {id: 6, type: 'Rock', color: '#a38c21'},
    {id: 7, type: 'Bug', color: '#719f3f'},
    {id: 8, type: 'Ghost', color: '#7b62a3'},
    {id: 9, type: 'Steel', color: '#8f8f8f'},
    {id: 10, type: 'Fire', color: '#fd7d24'},
    {id: 11, type: 'Water', color: '#4592c4'},
    {id: 12, type: 'Grass', color: '#47ab57'},
    {id: 13, type: 'Electric', color: '#eed535'},
    {id: 14, type: 'Psychic', color: '#f366b9'},
    {id: 15, type: 'Ice', color: '#8fffeb'},
    {id: 16, type: 'Dragon', color: '#f06d56'},
    {id: 17, type: 'Dark', color: '#363636'},
    {id: 18, type: 'Fairy', color: '#f700ff'},
    {id: 19, type: 'Unknown', color: '#ff0044'},
    {id: 20, type: 'Shadow', color: '#9bad80'},
    {id: 21, type: 'Reset', color: '#000'}
  ];

  public readonly getTypeColor = (typeName: string): string => {
    const findTypeColor = this.pokemonTypes.find((type) => type.type.toLowerCase() === typeName);
    return findTypeColor ? findTypeColor.color : '';
  }

}
