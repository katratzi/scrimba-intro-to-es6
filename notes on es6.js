// template literals - the strings thingy with ``
console.log(`${hello}`);

// destructuring objects
const player = {
  name: "Lebron James",
  club: "LA Lakers",
  address: {
    city: "Los Angeles",
  },
};

const {
  name,
  club,
  address: { city },
} = player;

console.log(`${name} lives in ${city}`);

// object literal
// helps reduce amount of code we have to write
function addressMaker(city, state) {
  const newAdress = { city, state }; // just pass straight in

  console.log(newAdress);
}

addressMaker("Austin", "Texas");

// for of loop - like for each in c#
// let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
  console.log(income);
  total += income;
}

// spread operator
// easy way to copy contents of an array into another
const contacts = ["Mary", "Joel", "Danny"];
let personalFriends = ["David", ...contacts, "Lily"];
contacts.push("John");

console.log(personalFriends);

// can also use it with objects too
let person = {
  name: "Adam",
  age: 25,
  city: "Manchester",
};

let employee = {
  ...person, // spread here
  salary: 50000,
  position: "Software Developer",
};

// rest operator
// kind of like params
function add(...nums) {
  console.log(nums); // will print them all as 4,5,7 etc.  (not as array)
}

add(4, 5, 7, 8, 12);

// arrow functions
//function declaration
function breakfastMenu() {
  return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function () {
  return "I'm going to eat pizza for lunch";
};

// a basic arrow function (it's a nice shorthand)
const dinnerMenu = () => {
  return "I'm going to eat a burger for dinner";
};

// same but with a value
const dinnerMenu = (food) => {
  return `I'm going to eat a ${food} for dinner`;
};
console.log(dinnerMenu("chicken salad"));

// if we're just returning one value can omit the return and  brackets for neatness
const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner`;

// default params - like in c# too
// fallbacks to default value if no value is passed in
const leadSinger = (artist = "someone") => {
  console.log(`${artist} is the lead singer of Cold Play`);
};

leadSinger();

// includes
let numArray = [1, 2, 3, 4, 5];
console.log(numArray.indexOf(0)); // == -1 so you know it's not there.  kind of wonky
console.log(numArray.includes(0)); // use includes for true/false instead

// let and const

// so problem is...this will print null because the example var is 'hoisted' up
if (false) {
  var example = 5;
}

console.log(example);

// this is what the compiler sees
/*
var example;

if (false) {
  example = 5;
}
*/

// by using let - we get block scope so we'll get an error undefined instead
if (false) {
  let example = 5;
}
console.log(example);

/*
if (false) {
  let example = 5;
}
*/

// const is interesting
const example = 5;
example = 10; // error because we're dealing with primitive types
console.log(example);
// hmm but we can do this..bit weird
const example = {};
example.firstName = "Dylan";
console.log(example);

// export and import
// in one file example js
export const data = [1, 2, 3];
// then import on other
import { data } from "./example.js";

console.log(data);

// can even work with it...e.g.
let updatedData = data;
updatedData.push(5);

// messing around with strings...
// padStart and padEnd - will add if there is space
let example = "Dylan";
console.log(example.padEnd(10, "a")); // = Dylanaaaaa

// sets
const exampleSet = new Set([1, 1, 1, 1, 2, 2, 2, 2]); // this size is 2, as only 2 unique elements

exampleSet.add(5);
exampleSet.add(5).add(17); // add to sets and chain add
// now the size is 4

console.log(exampleSet.delete(5)); // delete return a bool if the element was found
// and size is now 3 again...so we delete all 5's.
exampleSet.has(5); // another bool call
exampleSet.clear(); // and simply clear
