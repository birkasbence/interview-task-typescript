import { Pokemon } from '../models/Pokemon';

export function DisplayPokemon({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      <td>
        {pokemon.name}
      </td>
      <td>
        {pokemon.price}
      </td>
    </>
  );
}

export default DisplayPokemon;
