export function kata3 (n, m) {
  const pairs = [];
  for (let num = n; num <= m; num++) {
    const calculated = isCandidate(num);
    if (calculated) pairs.push([num, calculated]);
  }
  return pairs;
}

// Calculate the number's divisors, and add up their squares
const SquareSumDivisors = n => {
  return [...Array(n+1).keys()].slice(1)
    .reduce((sum, num) => sum + (!(n % num) ? num * num : 0));
};

const isSquare = n => Number.isInteger(Math.sqrt(n));

const isCandidate = n => {
  const calculated = SquareSumDivisors(n);
  return isSquare(calculated) ? calculated : false;
}
