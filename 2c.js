/*console.log(reverseArray(["A", "B", "C"]));
["C", "B", "A"]*/

const reverseArray = (arr) => {
  //   console.log(arr);
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(reverseArray(["A", "B", "C"]));
