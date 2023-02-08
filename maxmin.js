function task2(arr) {
  let min = arr[0],
    max = arr[0];
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }

  return [min, max];
}

let testArrays = [
  [2, 4, 1, 0, 2, -1],
  [20, 50, 12, 6, 14, 8],
  [100, -100],
];

for (let arr of testArrays) {
  console.log(task2(arr));
}
