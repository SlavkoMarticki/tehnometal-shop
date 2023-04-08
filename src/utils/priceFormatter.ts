export function formatPriceNum(num: number): string {
  const numFixed: string = num.toFixed(2);
  const numStr: string = numFixed.toString();
  if (num >= 1000) {
    const numStrReversed: string = numStr.split('').reverse().join('');
    const numStrReversedWithWhitespace: string = numStrReversed.match(/.{1,3}/g)!.join(' ');
    return numStrReversedWithWhitespace.split('').reverse().join('');
  } else {
    return numStr;
  }

}