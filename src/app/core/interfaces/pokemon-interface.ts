export interface PokemonInterface {
  id: number,
  base_experience: number,
  height: number,
  weight: number,
  name: string,
  order: number,
  pokemon?: {name: string},
  sprites: { front_default: string },
  stats: { base_stat: number, stat: { name: string } }[],
  types: { type: { name: string } }[]
}
