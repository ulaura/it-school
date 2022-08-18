const cntNums = document.getElementById("cntNums");
const cntOperationsEl = document.getElementById("cntOperations");
const additionResultEl = document.getElementById("txtAddResult");
const substractionResultEl = document.getElementById("txtSubstractResult");
const multiplicationResultEl = document.getElementById("txtMultiplyResult");
const divisionResultEl = document.getElementById("txtDivideResult");

const addNewBox = () => {
  let numOfBoxes = prompt("How many extra numbers do you need?");
  for (let i = 1; i <= numOfBoxes; i++) {
    const newNumBox = document.createElement("input");
    newNumBox.type = "number";
    cntNums.appendChild(newNumBox);
  }
};

const calculate = () => {
  const numbers = getNumbersToCalculate();
  const operations = getApplicableOperations();
  handleNumbersCalculation(numbers, operations);
};

const getNumbersToCalculate = () => {
  const numElements = cntNums.getElementsByTagName("input");
  const numbersToCalc = [];
  for (let i = 0; i < numElements.length; i++) {
    const numberToCalc = Number(numElements[i].value);
    numbersToCalc.push(numberToCalc);
  }
  return numbersToCalc;
};

const getApplicableOperations = () => {
  const operationsElements = cntOperationsEl.getElementsByTagName("input");
  const operations = [];
  for (let i = 0; i < operationsElements.length; i++) {
    const operationElement = operationsElements[i];
    if (operationElement.checked) {
      operations.push(operationElement.value);
    }
  }
  return operations;
};

const handleNumbersCalculation = (numbers, operations) => {
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "add") {
      addNumbersAndDisplayResult(numbers);
    }

    if (operations[i] === "substract") {
      substractNumbersAndDisplayResult(numbers);
    }

    if (operations[i] === "multiply") {
      multiplyNumbersAndDisplayResult(numbers);
    }

    if (operations[i] === "divide") {
      divideNumbersAndDisplayResult(numbers);
    }
  }
};

const addNumbersAndDisplayResult = (numbers) => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  additionResultEl.textContent = result;
};

const substractNumbersAndDisplayResult = (numbers) => {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result -= numbers[i];
  }
  substractionResultEl.textContent = result;
};

const multiplyNumbersAndDisplayResult = (numbers) => {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  multiplicationResultEl.textContent = result;
};

const divideNumbersAndDisplayResult = (numbers) => {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    let number = numbers[i];
    if (number === 0){
        divisionResultEl.textContent = "Cannot divide by 0";
        return;      
    }
    result /= number;
  }
  divisionResultEl.textContent = result;
};
