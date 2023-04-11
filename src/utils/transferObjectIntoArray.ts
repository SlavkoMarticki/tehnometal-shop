interface IData {
  id: string;
  data: any;
}

export function transferObjectIntoArray(data: any): IData[] {
  return Object.keys(data).map((key) => {
    return { id: key, data: data[key] };
  });
}
