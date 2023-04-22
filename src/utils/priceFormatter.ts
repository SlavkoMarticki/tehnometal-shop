export function formatPriceNum(num: number): string {
  const parts = num.toFixed(2).toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  if (parts.length > 1) {
    return parts.join('.');
  } else {
    return parts[0] + '.00';
  }
}
