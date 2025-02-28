function customSome(array, predicate) {
  for (let i = 0; i < array.length; i += 1) {
    const result = predicate(array[i], i, array);
    if (result) return true;
  }
  return false;
}
