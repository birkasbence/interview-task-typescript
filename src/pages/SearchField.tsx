import TextField from '@material-ui/core/TextField';
import { useCallback, useState } from 'react';

import { Pokemon } from '../models/Pokemon';
import { DisplayPokemon } from './DisplayPokemon';

function debounce<FunctionType extends (...args: any) =>
any, ThisType>(fv: FunctionType, ms: number) {
  let timeoutTask: NodeJS.Timeout | undefined;
  let result: ReturnType<FunctionType>;
  // eslint-disable-next-line func-names
  return function (this: ThisType, ...args: Parameters<FunctionType>) {
    const context = this;
    const Args = args;
    function executeFunction() {
      timeoutTask = undefined;
      result = fv.apply(context, Args);
    }
    // eslint-disable-next-line no-return-assign
    return (clearInterval(timeoutTask), timeoutTask = setTimeout(executeFunction, ms), result);
  };
}

export function SearchField() {
  const [searchInput, setSearchInput] = useState('');
  const [resultPokemon, setResultPokemon] = useState<Pokemon>();
  const [resultString, setResultString] = useState('');

  const search = (input: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}/`)
      .then(async (response) => {
        if (response.status === 404) {
          setResultString('There is no pokemon with that name');
        } else {
          const p = new Pokemon(await response.json());
          setResultPokemon(p);
        }
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce(search, 1000), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <>
      <TextField placeholder="Search for pokemon name" value={searchInput} onChange={handleChange} />
      {resultPokemon
        ? (
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
              <tr>
                <DisplayPokemon pokemon={resultPokemon} />
              </tr>
            </tbody>
          </table>
        )
        : <p>{resultString}</p>}
    </>
  );
}

export default SearchField;
