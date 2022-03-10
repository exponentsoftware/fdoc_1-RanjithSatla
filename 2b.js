/*2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
```js
sevenRandomNumbers()
[1,4,5,7,9,8,0]*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let Array = [];

  for (i = 0; i < 7; i++) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);

    //The maximum is inclusive and the minimum is inclusive

    Array.map((element, index) => {
      console.log(num, element);
      if (num !== element && index === Array.length - 1) {
        Array.push(num);
      }
    });
  }

  console.log(Array);
}

getRandomIntInclusive(0, 9);
