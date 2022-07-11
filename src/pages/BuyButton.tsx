import Button from '@material-ui/core/Button';

import { Pokemon } from '../models/Pokemon';

export function BuyButton({
  pokemon, pokemons, setPokemons, setPocket, money, setMoney,
}:
{ pokemon: Pokemon, pokemons: Pokemon[],
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>,
  setPocket: React.Dispatch<React.SetStateAction<Pokemon[]>>, money: number,
  setMoney: React.Dispatch<React.SetStateAction<number>> }) {
  const handleAdd = () => {
    if (money < pokemon.price) return;
    setMoney(money - pokemon.price);
    setPocket((oldArray) => [...oldArray, pokemon]);
    setPokemons(pokemons.filter((item) => item.name !== pokemon.name));
  };

  return (
    <td>
      <Button variant="contained" onClick={() => handleAdd()}>BUY</Button>
    </td>
  );
}

export default BuyButton;
