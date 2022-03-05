/*2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
```js
#
##
###
####
#####
######
####### */

const loop = (num) => {
  for (let i = 0; i < num; i++) {
    let output = "";
    console.log(`${output.padEnd(1)}${"#".repeat(i + 1)}`);
  }
};

loop(7);
