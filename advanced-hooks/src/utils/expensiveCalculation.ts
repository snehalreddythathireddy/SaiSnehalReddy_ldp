export function calculateFactorial(num: number): number {
  console.log("Calculating factorial...");

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}