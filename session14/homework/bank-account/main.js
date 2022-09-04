let balance = 100;
//Immediately Invoked Function Expression (IIFE)
(() => {
  console.log(
    "Available operations:" +
      "\nW - Withdraw" +
      "\nC - Check balance" +
      "\nD - Add money" +
      "\nNOTE: use execOp(operation key)"
  );
})();

const execOp = (operation) => {
  const op = operation.toUpperCase();

  // (op === "W" && withdraw() ||
  // op === "C" && checkBalance() ||
  // op === "A" && deposit()) || alert("Unknown operation");

  switch (operation.toUpperCase()) {
    case "W":
      withdraw();
      break;
    case "C":
      checkBalance();
      break;
    case "D":
      deposit();
      break;
    default:
      alert("Unknown operation");
  }
};

const withdraw = () => {
  const amount = Number(prompt("Enter amount to withdraw"));
  const result = balance - amount;
  result < 0 ? alert("You have insufficient money") : (balance = result);
};

const checkBalance = () => {
  alert(`Your balance is: ${balance}`);
};

const deposit = () => {
  const amount = Number(prompt("Enter amount to deposit"));
  balance += amount;
};
