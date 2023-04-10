import { ICategories } from '../types';
interface IData {
  id: string;
  data: any;
}

export function transferObjectIntoArray(data: any): ICategories[] {
  return Object.keys(data).map((key) => {
    return { id: key, data: data[key] };
  });
}
