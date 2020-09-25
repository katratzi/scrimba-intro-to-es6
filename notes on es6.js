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
