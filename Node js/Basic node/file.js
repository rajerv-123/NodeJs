// const { log } = require("console");
const fs = require("fs");

//Synchronous call
//fs.writeFileSync("./test.txt", "hey there node js world!");

// Asynchronous call

//fs.writeFileSync("./test.txt", "Hello world Asynchronous call", (err) => {});

//const result = fs.readFileSync("./contact.txt", "utf-8");
//console.log(result);

// const result = fs.readFile("./contact.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Result", result);
//   }
// });

// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);
// // fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt"));
// fs.mkdirSync("my-docs/a/b", { recursive: true });

//syncronus  blocking  requests
// fs.writeFileSync("./test.txt", "Hello World");

// Asynchronou  Non - blocking reqests
// fs.writeFile("./test.txt", "Hello World Asyc", (err) => {});
// console.log("1")
// console.log("2")
// const result = fs.readFileSync("test.txt", "utf-8");
// console.log(result);

console.log("1");
const result = fs.readFile("test.txt", "utf-8", (err, result) => {
  console.log(result);
});
console.log("2");
console.log("3");
