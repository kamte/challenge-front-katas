export function kata1 (number) {
  return parseInt(number.toString().split('').sort((a,b)=>b-a).join(''), 10);
}
