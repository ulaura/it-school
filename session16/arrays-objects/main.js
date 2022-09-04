// const obj = {
//   "name-of-user": "James",
//   age: 123,
// };

// console.log(obj);
// //obj["name-of-user"];
// delete obj.age;
// console.log(obj);

// const obj1 = {
//   name: "Ion",
//   age: 22,
//   inCart: 200,
//   wallet: 1000,
// };

// function modify(obj) {
//   const oo = { ...obj };
//   //   oo.name = "Vasi";
//   // verificam daca are destui bani
//   obj.wallet = obj.wallet - oo.inCart;
// }

// console.log(obj1);
// modify(obj1);
// console.log(obj1);

//Array methods
// const sports =['Basketball', 'Fotbal', 'Volleyball', 'Hockey', 'Oina', 'Golf'];

// const ceva = sports.push('Box');
// console.log(ceva);

// console.log(sports);

// const numbers = [11, 22, 33, 44, 55, 2, 5, 8, 9];
// const updatedNumbers = numbers.filter((item) => item >= 11);
// console.log(updatedNumbers);
// console.log(numbers);

// const updatedNumbers = numbers
//   .map((item) => item + 10)
//   .filter((item) => item >= 11);

// console.log(updatedNumbers);
// console.log(numbers);

// const months = ['Dec', 'Jan', 'May', 'April'];
// months.sort();
// console.log(months);

//SORT METHOD
// const numbers = [11, 22, 33, 44, 55, 2, 5, 8, 9];
// numbers.sort((a, b) => {
//   console.log(a, b);
//   return a-b;
// });
// console.log(numbers);

// const response = {
//   facts: [
//     "Ronald Reagan’s dog.",
//     "Dogs don't enjoy being hugged",
//     "as much as humans and other primates. Canines interpret putting",
//     "limb over another animal as a sign of dominance.",
//   ],
//   success: true,
// };

// response.facts.map((item) => console.log(item));
// response.facts.map((item) => {
//   console.log(item.split(""));
//   console.log(item.split("").length);
// });

// const response = {
//   count: 30,
//   next: null,
//   previous: null,
//   results: [],  //vezi ca nu ai tot
// };

// const books = response.results.map((item) => {
//   console.log(item);
//   return {
//     id: item.id,
//     title: item.title,
//     authors: item.authors,
//     subjects: item.subjects,
//   };
// });

// const html = books.map(
//   (book) => `<h1>${book.title}</h1><h4>${JSON.stringify(book.authors)}</h4>`
// );
// console.log(books);

// const app = document.querySelector("#app");
// app.innerHTML = `
// ${html}
// `;
