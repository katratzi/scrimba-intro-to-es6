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
