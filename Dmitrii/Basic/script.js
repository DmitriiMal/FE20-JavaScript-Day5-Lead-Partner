// //////////////////////// //
// ///// Basic | Ex 1 ///// //
// //////////////////////// //


// Cars

let carsArr = [];

class Car {
   //Define a constructor inside the class
  constructor (mark, model, year, color, fuel, mpg) {
       this.mark = mark;
       this.model = model;
       this.year = year;
       this.color = color;
       this.fuel = fuel;
       this.mpg = mpg;
       carsArr.push(this)
  }
    //Define the method inside the class
  message() {
      return `This ${this.mark } ${this.model} was made in ${this.year}`;
  }
}

class Motorbike extends Car {
  constructor(mark, model, year, color, fuel, mpg, wheels) {
    super(mark, model, year, color, fuel, mpg);

    this.wheels = wheels;
}
}

// // Animals

let animArr = [];

class Animal {
   //Define a constructor inside the class
  constructor (kind, name, breed, age, favoriteToys, canFly) {
       this.kind = kind;
       this.name = name;
       this.breed = breed;
       this.age = age;
       this.favoriteToys = favoriteToys;
       this.canFly = canFly;
       animArr.push(this)

  }
    //Define the method inside the class
    message() {
      return `This ${this.kind}'s name is ${this.name} and it is ${this.age} years old`;
  }
}

class Fish extends Animal {
  constructor (kind, name, breed, age, favoriteToys, canFly, predator) {
    super (kind, name, breed, age, favoriteToys, canFly);
    this.predator = predator;
  }
  message() {
    return `This Fish likes play with ${this.favoriteToys[0]} and ${this.favoriteToys[1]} and it is ${this.age} years old`;
}

}

// // Person

let pirArr = [];

class Person {
   //Define a constructor inside the class
  constructor (firstName, lastName, age, hobbys, isMarried, hasChildren) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.hobbys = hobbys;
       this.isMarried = isMarried;
       this.hasChildren = hasChildren;
       pirArr.push(this)

  }
    //Define the method inside the class
    message() {
      return `${this.firstName} ${this.lastName} is ${this.age} years old`;
  }
}

class Athlete extends Person {
  constructor (firstName, lastName, age, hobbys, isMarried, hasChildren, sportType){
    super(firstName, lastName, age, hobbys, isMarried, hasChildren);
    this.sportType = sportType;
  }
  message() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old and does ${this.sportType} professionally`;
}
}



// Creating objects

const person1 = new Person('Dmitrii', 'Malyshkin', 34, ['running', 'photographing'], true, false)
const person2 = new Person('Magdalena', 'Sturm', 34, ['running', 'reading'], true, false)
const person3 = new Person('Martin', 'Sturm', 61, ['photographing', 'reading'], true, true)

const athlete1 = new Athlete('Eliud', 'Kipchoge', 38, 'reading', true, true, 'running')
const athlete2 = new Athlete('Jack', 'Alexy', 20, 'running', false, false, 'swimming')
const athlete3 = new Athlete('Alejandro', 'Valverde', 43, 'coin collecting', true, true, 'cycling')


const car1 = new Car('Ford', 'Explorer', 2008, 'red', 'gas', 18)
const car2 = new Car('Toyota', 'Raum', 1999, 'black', 'gas', 15)
const car3 = new Car('Renault', 'Sandero', 2015, 'wite', 'gas', 13)

const bike1 = new Motorbike('Suzuki', 'r125', 2010, 'green', 'gas', 6, 2)
const bike2 = new Motorbike('Honda', '125', 2018, 'yellow', 'gas', 4, 2)
const bike3 = new Motorbike('Xtrax Sport', '250cc', 2022, 'red', 'gas', 8, 4)


const animal1 = new Animal('Cat', 'Markiz', 'Cat', 18, ['balls', 'wrapper'], false)
const animal2 = new Animal('Dog', 'Spyke', 'dachshund', 5, ['balls', 'bones'], false)
const animal3 = new Animal('Duck', 'Tina', 'Duck', 2, ['apple wobbling', 'jumpung'], true)

const fish1 = new Fish('Fish', 'noName', 'carp', 0, ['frogs', 'sun'], false, false)
const fish2 = new Fish('Fish', 'noName', 'pterophyllum', 1, ['snails', 'plants'], false, false)
const fish3 = new Fish('Fish', 'noName', 'shark', 3, ['tourists', 'octopuses'], false, true)



console.log(carsArr);

for (let car of carsArr){
  document.querySelector('#cars').innerHTML += `<p>${car.message()}</p>`
}


console.log(animArr);

for (let animal of animArr){
  document.querySelector('#animals').innerHTML += `<p>${animal.message()}</p>`
}


console.log(pirArr);

for (let peaple of pirArr){
  document.querySelector('#people').innerHTML += `<p>${peaple.message()}</p>`
}


