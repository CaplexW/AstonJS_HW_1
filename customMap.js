function customMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i += 1) { result.push(callback(array[i], i, array)); }

  return result;
}

function customReduce(array, callback, accValue) {
  let result;
  let acc = accValue;

  for (let i = 0; i < array.length; i += 1) {
    result = (callback(acc, array[i], i, array));
    acc = result;
  }

  return result;
}

function customSome(array, predicate) {
  for (let i = 0; i < array.length; i += 1) {
    const result = predicate(array[i], i, array);
    if (result) return true;
  }
  return false;
}