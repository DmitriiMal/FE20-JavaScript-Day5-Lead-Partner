// //////////////////////// //
// ///// Basic | Ex 1 ///// //
// //////////////////////// //


// Cars

class Car {
   //Define a constructor inside the class
  constructor (mark, model, year, color, fuel, mpg, owner) {
       this.mark = mark;
       this.model = model;
       this.year = year;
       this.color = color;
       this.fuel = fuel;
       this.mpg = mpg;
       this.owner = owner;
  }
    //Define the method inside the class
  fullName() {
      return `This ${this.mark } ${this.model} was made in ${this.year}`;
  }
}


// // Animals

class Animal {
   //Define a constructor inside the class
  constructor (kind, name, breed, age, favoriteToys, owner, canFly) {
       this.kind = kind;
       this.name = name;
       this.breed = breed;
       this.age = age;
       this.favoriteToys = favoriteToys;
       this.owner = owner;
       this.canFly = canFly;
  }
    //Define the method inside the class
  fullName() {
      return `This ${this.kind}'s name is ${this.name} and it's owner is ${this.owner}`;
  }
}


// // Person

class Person {
   //Define a constructor inside the class
  constructor (firstName, lastName, age, hobbys, isMarried, hasChildren) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.hobbys = hobbys;
       this.isMarried = isMarried;
       this.hasChildren = hasChildren;
  }
    //Define the method inside the class
  fullName() {
      return  `${this.firstName} ${this.lastName} is ${this.age} years old`;
  }
}


// Creating objects

const person1 = new Person('Dmitrii', 'Malyshkin', 34, ['running', 'photographing'], true, false)
const person2 = new Person('Magdalena', 'Sturm', 34, ['running', 'reading'], true, false)
const person3 = new Person('Martin', 'Sturm', 61, ['photographing', 'reading'], true, true)

const car1 = new Car('Ford', 'Explorer', 2008, 'red', 'gas', 18, person1)
const car2 = new Car('Toyota', 'Raum', 1999, 'black', 'gas', 15, person2)
const car3 = new Car('Renault', 'Sandero', 2015, 'wite', 'gas', 13, person3)

const animal1 = new Animal('Cat', 'Markiz', 'Cat', 18, ['balls', 'wrapper'], person1, false)
const animal2 = new Animal('Dog', 'Spyke', 'dachshund', 5, ['balls', 'bones'], person2, false)
const animal3 = new Animal('Duck', 'Tina', 'Duck', 2, ['apple wobbling', 'jumpung'], person2, true)

// const car3 = {
//   mark: "Reno",
//   model: "Sandero",
//   year: 2015,
//   color: "wite",
//   fuel: "gas",
//   mpg: 13,
//   owner: person3,
// }






// const person1 = {
//   name,
//   age,
//   hobbys,
// };
// const person2= {};
// const person3 = {};











// const = cat {
//   name:,
//   breed:,
//   age:,
//   favoriteToys:,
//   owner: person1,
// }










// // Animals

// const = cat {
//   name:,
//   breed:,
//   age:,
//   favoriteToys:,
//   owner: person1,
// }







// const person1 = {
//   name,
//   age,
//   hobbys,
// };
// const person2= {};
// const person3 = {};





// const circle = {
//   height: 20,
//   width: 20,
//   area: function{
//     return ///
//   }
// };

// const rectangle = {
//   height: 20,
//   width: 20,
// };

// const square = {
//   height: 20,
//   width: 20,
// };









// const smartphone1 = {
//   brand: 'Apple',
//   model: 'XS',
//   color: 'white',
//   weight: 177,
//   storageGB: 64,
//   dualSim: false,
//   owner: person1,
// }

// const smartphone2 = {
//   brand: 'Samsung',
//   model: 'Galaxy S10e',
//   color: 'black',
//   weight: 380,
//   storageGB: 128,
//   dualSim: false,
//   owner: person2,
// };

// const smartphon3 = {
//   brand: 'Samsung',
//   model: 'Galaxy S10e',
//   color: 'black',
//   weight: 380,
//   storageGB: 128,
//   dualSim: false,
//   owner: person2,
// };
