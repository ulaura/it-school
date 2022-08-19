const cntNums = document.getElementById("cntNums");
const cntOperationsEl = document.getElementById("cntOperations");
const additionResultEl = document.getElementById("txtAddResult");
const substractionResultEl = document.getElementById("txtSubstractResult");
const multiplicationResultEl = document.getElementById("txtMultiplyResult");
const divisionResultEl = document.getElementById("txtDivideResult");

const addNewBox = () => {
  let numOfBoxes = Number(prompt("How many extra numbers do you need?"));
  for (let i = 1; i <= numOfBoxes; i++) {
    const newNumBox = document.createElement("input");
    newNumBox.type = "number";
    newNumBox.placeholder = "Number";
    cntNums.appendChild(newNumBox);
  }
};

const calculate = () => {
  const numbers = getNumbersToCalculate();
  const operations = getApplicableOperations();
  handleNumbersCalculation(numbers, operations);
};

const getNumbersToCalculate = () => {
  return [...cntNums.getElementsByTagName("input")].map((element) =>
    Number(element.value)
  );
};

const getApplicableOperations = () => {
  // map and filter only works on arrays
  // cntOperationsEl.getElementsByTagName("input") returns an HTML collection
  // which is not an array so we use destructuring to unpack the values into an array
  return [...cntOperationsEl.getElementsByTagName("input")]
    .filter((el) => el.checked)
    .map((el) => el.value);
};

const handleNumbersCalculation = (numbers, operations) => {
  operations.forEach((operation) => {
    //if first condition is false it does short circuiting else it evaluates
    //the second expression which in our case is a function so it executes the function
    operation === "add" && addNumbersAndDisplayResult(numbers);
    operation === "substract" && substractNumbersAndDisplayResult(numbers);
    operation === "multiply" && multiplyNumbersAndDisplayResult(numbers);
    operation === "divide" && divideNumbersAndDisplayResult(numbers);
  });
};

const addNumbersAndDisplayResult = (numbers) => {
  const result = numbers.reduce((previousValue, number) => previousValue + number, 0);
  additionResultEl.textContent = result;
};

const substractNumbersAndDisplayResult = (numbers) => {
  const result = numbers.reduce((previousValue, number) => previousValue - number);
  substractionResultEl.textContent = result;
};

const multiplyNumbersAndDisplayResult = (numbers) => {
  const result = numbers.reduce((previousValue, number) => previousValue * number, 1);
  multiplicationResultEl.textContent = result;
};

const divideNumbersAndDisplayResult = (numbers) => {
  const result = numbers.reduce((previousValue, number) => previousValue / number); 
  divisionResultEl.textContent = result ?? "Cannot devide by 0"; 
};