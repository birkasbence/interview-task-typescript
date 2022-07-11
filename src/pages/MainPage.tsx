import { useEffect, useState } from 'react';

import { Pokemon } from '../models/Pokemon';
import { AddMoney } from './AddMoney';
import { DisplayMoney } from './DisplayMoney';
import { Pocket } from './Pocket';
import PokemonTable from './PokemonTable';
import { SearchField } from './SearchField';

export default function MainPage() {
  const [money, setMoney] = useState(15000);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pocket, setPocket] = useState<Pokemon[]>([]);

  useEffect(() => {
    const newArray: Pokemon[] = [];
    const getPokemon = (id: number) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(async (response) => {
        const p = new Pokemon(await response.json());

        newArray[id - 1] = p;
      });
    const getAll = () => {
      Promise.all([...Array(10).keys()].map((i) => getPokemon(i + 1)))
        .then(() => setPokemons(newArray));
    };
    getAll();
  }, []);

  return (
    <>
      <DisplayMoney money={money} />
      <AddMoney money={money} setMoney={setMoney} />
      <SearchField />
      <PokemonTable
        pokemons={pokemons}
        setPokemons={setPokemons}
        setPocket={setPocket}
        money={money}
        setMoney={setMoney}
      />
      <Pocket pocket={pocket} />
    </>
  );
}
