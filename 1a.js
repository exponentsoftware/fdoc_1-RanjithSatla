/*1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters. It compare  which word is most frequently occurred in the paragraph.
```js

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(countWords(paragraph,'love', 'you'));
The word love more frequently occurred than you.*/

const countWords = (para, w1, w2) => {
  const words = para.split(" ");
  let l = 0;
  let y = 0;
  for (const word of words) {
    if (word.includes(w1)) {
      l++;
    } else if (word.includes(w2)) {
      y++;
    }
  }
  console.log(l, y);
  if (l > y) {
    return console.log("The word love more frequently occurred than you.");
  } else {
    return console.log("The word you more frequently occurred than love.");
  }
};

const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";

console.log(countWords(paragraph, "love", "you"));
