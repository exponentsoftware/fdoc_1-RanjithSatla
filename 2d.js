/*2.d. Write a function which check if items of an array are unique?
```js
const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));
false
const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));
true */

function checkUniqueness(arr) {
  return new Set(arr).size !== arr.length;
}

const arr = [
  [1, 4, 6, 2, 1],
  [1, 4, 6, 2, 3],
];
for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
  if (checkUniqueness(arr[i])) {
    console.log("False.");
  } else {
    console.log("True.");
  }
}
