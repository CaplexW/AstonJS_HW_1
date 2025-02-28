function customReduce(array, callback, accValue) {
  let result;
  let acc = accValue;

  for (let i = 0; i < array.length; i += 1) {
    result = (callback(acc, array[i], i, array));
    acc = result;
  }

  return result;
}