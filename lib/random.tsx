export function randomBetween(min: number, max: number) {
  const diff = max - min;
  return min + Math.floor(Math.random() * diff);
}

export function randomIn<T>(arr: T[]) {
  return arr[randomBetween(0, arr.length)];
}
