export function transferObjectIntoArray(data: any): any {
  return Object.keys(data).map((key) => {
    return { id: key, data: data[key] };
  });
}
