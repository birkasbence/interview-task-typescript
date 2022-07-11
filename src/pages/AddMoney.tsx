import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

export function AddMoney({ money, setMoney }:
{ money: number; setMoney: React.Dispatch<React.SetStateAction<number>> }) {
  const [addValue, setAddValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parse = Number(e.target.value) || 0;
    setAddValue(parse);
  };

  const handleAdd = () => {
    setMoney(money + addValue);
    setAddValue(0);
  };

  return (
    <div>
      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} value={addValue} onChange={handleChange} />
      <Button variant="contained" onClick={handleAdd}>Add</Button>
    </div>
  );
}

export default AddMoney;
