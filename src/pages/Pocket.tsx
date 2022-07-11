import { Pokemon } from '../models/Pokemon';

export function Pocket({ pocket } : { pocket: Pokemon[] }) {
  return (
    <>
      {pocket.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </>
  );
}

export default Pocket;
