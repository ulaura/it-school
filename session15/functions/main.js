"use strict"

// function sayHello() {
//   console.log("Hello guys!");
// }
// sayHello();

// function multiply(num1, num2) {
//   const result = num1 * num2;
//   // console.log(result);
//   return result;
// }
// console.log(multiply(4, 74));

// function isEqual(num1,num2){
//     return num1 === num2;
// }
// console.log(isEqual(7,9));

// function startCar(make) {
//     this.carManufacturer = make;
//     const carManufacturer = make;
//     console.log(`Starting car ${this.carManufacturer}`);
// }
// startCar("mercedes");

// const multiply = (num1, num2) => num1 * num2;  //implicit return
// console.log(multiply(5,6));

// const stopCar = () => {
//     console.log("Starting car");
// }

// const users = [];
// const createUser = (user) => {
//   if (user.password.length === 0) return;

//   const fullName = `${user.firstName} ${user.lastName}`;
//   const formattedUser = {
//     name: fullName,
//     email: user.email,
//     success: true,
//   };
//   users.push(formattedUser);

//   return formattedUser;
// };

// const laura = createUser({
//   firstName: "Laura",
//   lastName: "Urian",
//   email: "cartof@cartof.com",
//   password: "cartofel",
//   age: 29,
//   country: "Romania",
//   sex: "F",
//   hasAcceptedTerms: true,
// });

// console.log(laura);

// const createUser = (user) => {
//   if (!isUserValid(user)) return;

//   const formattedName = `${user.firstName} ${user.lastName}`;

//   hashPassword();
//   saveUserToDB();

//   return {
//     name: formattedName,
//     succes: true,
//   };
// };

// const saveUserToDB = () => {
//   const saveUser = fetch("http://localhost:1337/api/user", {
//     method: "POST",
//     body: JSON.stringify(user),
//   }); //call to the backend
// };

// const isUserValid = (user) => {
//   if (user.firstName.length === 0) return false;
//   if (user.lastName.length === 0) return false;
//   if (user.password.length === 0) return false;
//   if (user.country.length === 0) return false;
//   if (user.age <= 18) return false;
//   if (!user.hasAgreed) return false;
//   if (user.country !== "Romania") return false;
// };

// const anuntam = (message) => {
//   console.log(message);
// };

// const multiply = (num1 = 0, num2 = 1) => num1 * num2;

// // const rez = multiply(5,73);
// anuntam(multiply(73, 76));
