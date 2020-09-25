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
