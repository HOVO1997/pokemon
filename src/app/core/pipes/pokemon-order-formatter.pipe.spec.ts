import { PokemonOrderFormatterPipe } from './pokemon-order-formatter.pipe';

describe('PokemonOrderFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonOrderFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
