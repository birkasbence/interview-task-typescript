import { IPokemon } from '../interfaces/IPokemon';

export class Pokemon implements IPokemon {
  name: string;

  weight: number;

  constructor({ name, weight }: { name: string; weight: number; }) {
    this.name = name;
    this.weight = weight;
  }

  get price(): number {
    return this.weight * 100;
  }
}

export default Pokemon;
