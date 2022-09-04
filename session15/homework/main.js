const calcAverage = (numbers) =>
  numbers.reduce((total, number) => (total += number)) / numbers.length;
console.log(calcAverage([1, 3, 4, 5, 6, 7]));

const text = `Pre-requisite: How to import a library in JavaScript.
There is a built-in Module or in-built library in NodeJs which handles all the writing operations called fs (File-System). 
It is basically a JavaScript program (fs.js) where function for writing operations is written.
`;

const removeCharaterFromText = (text, charToRemove) => {
  return [...text].reduce((newText, char) => char !== charToRemove ? newText+=char : newText , "");
};

const newText = removeCharaterFromText(text, " ");
console.log(newText);
