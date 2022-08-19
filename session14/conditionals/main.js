//If statement
// const age = 18;
// const ageOfConsent = 21;

//DRY Don't repeat yourself

// if (age < ageOfConsent) {
//   console.log("You are not allowed here!");
// } else if (age < 40) {
//   console.log("You get a 🍺");
// } else {
//   console.log("You get a 🥃");
// }

//Switch statement
// const firma = "Dacia";

// switch (firma) {
//   case "Dacia":
//     console.log("Romania");
//     break;
//   case "Mercedes":
//     console.log("Germania");
//     break;
//   case "Hyundai":
//     console.log("Japonia");
//     break;
//   default:
//     console.log("Potato");
//     break;
// }

//Ternary operator
// const age = 25;

// age < 18 ? console.log("❌") : console.log("🍺");

//Loops
//-----> While
// let condition = true;
// let num = 1;

// while (condition) {
//   console.log(num);
//   num++;
//   if (num === 50) {
//     condition = false; //break
//   }
// }

//-----> For
// const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num = 0; num <= 50; num++) {
//   console.log(num);
// }

// for (let index = 0; index < grades.length; index++) {
//   console.log(grades[index]);
// }

//-----> The map() method
// grades.map((value, index) => {
//   console.log(value);
// });

// const cnp = ["1981215113271", "1971214084330", "1960603282923"];

// const arr = ["aura", "cristi", "denisa", "teddy", "alex"];
// cnp.map((value, index) => {
//   const date = value.substring(1, 7);
//   console.log(date); //981215
//   const year = date.substring(0, 2);
//   const month = date.substring(2, 4);
//   const day = date.substring(4, 6);
//   console.log(`Year: 19${year}. Month: ${month}. Day ${day} `);
// });

//Falsy values
// const emptyString = "";

// if(emptyString){
//     console.log("Is true");
// }else{
//     console.log("Is false");
// }

// !!null --> will give us false

// map advantages
// immutability

// const nums = [1, 2, 3, 4];

// console.log(nums);
// nums.pop();
// console.log(nums);

// const multiplu = nums.map(value => value * 2);
// console.log(nums, multiplu);

// nums.push(34);
// console.log(nums);