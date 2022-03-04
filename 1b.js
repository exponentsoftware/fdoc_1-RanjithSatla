/*1.b. Write a function called ***cleanText***. The function takes raw text as a parameter and returns the clean text.
```js
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
    console.log(cleanText(sentence));*/

const cleanText = (text) => {
  nrmlText = text.split(" ");

  for (const word of nrmlText) {
    if (word.includes("%" || "$" || "@" || "&" || "#")) {
      word.replace("%" || "$" || "@" || "&" || "#", "");
      console.log(word);
    }
  }
};

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));
