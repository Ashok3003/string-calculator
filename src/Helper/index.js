function add(numbers) {
  if (!numbers || (numbers && !numbers.trim())) return 0;
  numbers = numbers.replace(/\\n/g, ",");
  let numberSet = numbers.match(/-?\b\d*\.?\d+\b/g);
  numberSet = numberSet.map(Number);
  const negativeNumber = numberSet.filter((num) => num < 0);
  if (negativeNumber.length > 0)
    throw new Error("Negatives not allowed: " + negativeNumber.join(","));
  return numberSet.reduce((sum, num) => sum + num, 0);
}

export { add };
