const majorityElement = (arr) => {
  let i = 0,
    j = 0,
    len = 0;
  len = arr.length;

  for (i = 0; i < len; i++) {
    let count = 0;

    for (j = 0; j < len; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count >= len / 2) {
      return true;
    }
  }

  return false;
};

/** Drive code  */

let arr = [1, 1, 2, 1, 3, 5, 1];
let result = majorityElement(arr);
console.log(result);
