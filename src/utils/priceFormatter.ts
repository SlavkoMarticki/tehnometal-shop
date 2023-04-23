export function formatPriceNum(num: number): string {
  const parts = num.toFixed(2).toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  if (parts.length > 1) {
    return parts.join('.');
  } else {
    return parts[0] + '.00';
  }
}

export function calculateReducedPrice(price: number, percent: number): string {
  const result = price * (1 - percent / 100);
  return result
    .toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: false
    })
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
