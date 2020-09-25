export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  // note no function keyword
  makeNoise(sound = "Loud Noise") {
    console.log(sound);
  }

  // static function like c#
  static return10() {
    return 10;
  }

  // get to create properties
  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }
}

// inherot from Animal
export class Cat extends Animal {
  // add to the constructr...super keyword
  constructor(type, legs, tail) {
    super(type, legs);
    this.tail = tail;
  }
  // override the parent class
  makeNoise(sound = "meow") {
    console.log(sound);
  }
}

import { Animal } from "./animal.js";

let cat = new Animal("Cat", 4);

// can change values
cat.legs = 3;
cat.makeNoise("Meow");
console.log(cat.legs);

console.log(Animal.return10());
console.log(cat.metaData);
