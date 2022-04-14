export function createData(year: number, month: number, day: number) {
  const data = new Date(year, month, day).toJSON().slice(0,10).replace(/-/g,'-');
  return data;
}