/*1.c. After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter.

```js
const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWords(sentence));
31 */

const countWords = (sen) => {
  const words = sen.split(" ");
  let count = 0;
  for (const word of words) {
    if (word.length > 1) {
      count++;
    }
  }
  return count;
};

const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;
console.log(countWords(sentence));
