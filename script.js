//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound(sound) {
    console.log(`${this.species} makes a ${sound} sound.`);
  }
}

class Cat extends Animal {
  purr() {
    this.makeSound("purr");
  }
}

class Dog extends Animal {
  bark() {
    this.makeSound("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
