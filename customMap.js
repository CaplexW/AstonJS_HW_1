function customMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i += 1) { result.push(callback(array[i], i, array)); }

  return result;
}
