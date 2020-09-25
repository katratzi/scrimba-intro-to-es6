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
