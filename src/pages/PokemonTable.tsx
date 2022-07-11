import { Pokemon } from '../models/Pokemon';
import { BuyButton } from './BuyButton';
import { DisplayPokemon } from './DisplayPokemon';

function PokemonTable({
  pokemons, setPokemons, setPocket, money, setMoney,
}:
{ pokemons: Pokemon[], setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>,
  setPocket: React.Dispatch<React.SetStateAction<Pokemon[]>>, money: number,
  setMoney: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <tr key={pokemon.name}>
              <DisplayPokemon pokemon={pokemon} />
              <BuyButton
                pokemon={pokemon}
                pokemons={pokemons}
                setPokemons={setPokemons}
                setPocket={setPocket}
                money={money}
                setMoney={setMoney}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PokemonTable;
