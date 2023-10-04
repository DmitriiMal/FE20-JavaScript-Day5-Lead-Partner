// console.table(object);


// //////////////////////////// //
// ///// Creating objects ///// //
// //////////////////////////// //

let carsArray = [];

class Car {
  constructor (mark, model, producer, price, year, img){
    this.mark = mark;
    this.model = model;
    this.producer = producer;
    this.price = price;
    this.year = year;
    this.img = img;
    carsArray.push(this);
  }
  info(){
    return `
    <div class="card" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${this.mark} ${this.model}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet.</p>
          <a href="#" class="btn btn-primary my-btn">Go somewhere</a>
      </div>
    </div>
  `
  }
}

const car1 = new Car('Dodge', 'Challenger', 'Stellantis', 120000, 2022, 'https://cdn.pixabay.com/photo/2020/06/12/21/42/dodge-charger-5291976_1280.jpg');
const car2 = new Car('Ford', 'Mustang', 'Ford', 120000, 2022, 'https://cdn.pixabay.com/photo/2012/11/03/22/41/ford-64041_1280.jpg');
const car3 = new Car('Audi', 'A4', 'Audi AG', 120000, 2022, 'https://cdn.pixabay.com/photo/2014/10/25/13/49/audi-502564_1280.jpg');
const car4 = new Car('BMW', 'X1', 'Stellantis', 120000, 2022, 'https://images.unsplash.com/photo-1619362280286-f1f8fd5032ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80');
const car5 = new Car('Chevrolet', 'Camaro', 'General Motors', 120000, 2022, 'https://images.unsplash.com/photo-1570089434134-9fe163fcfb8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2008&q=80');
const car6 = new Car('Ferrari', 'F150', 'LaFerrari', 14000000, 2022, 'https://images.unsplash.com/photo-1618102973579-3c6852d015d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RmVycmFyaSUyMExhRmVycmFyaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60');
const car7 = new Car('Pagani', 'Huayra', 'Pagani Automobili S.p.A.', 14000000, 2022, 'https://images.unsplash.com/photo-1566024164372-0281f1133aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80');
const car8 = new Car('Mercedes-Benz', 'SLS AMG', 'General Motors', 12000000, 2015, 'https://images.unsplash.com/photo-1630165646069-5377653745b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80');

// console.log(carsArray[0].info());
// console.table(carsArray[0].info())


// //////////////////////////// //
// ///// Printing in HTML ///// //
// //////////////////////////// //



carsArray.forEach(function(val, index){
  document.getElementById('result').innerHTML += val.info();
})


// //////////////////////////// //
// //// Access all buttons //// //
// //////////////////////////// //

const btns = document.querySelectorAll('.my-btn');



// //////////////////////////////////////////////// //
// /// Add ivent to buttons and HTML to new div /// //
// //////////////////////////////////////////////// //


// for (let i = 0; i < carsArray.length; i++){
//   btns[i].addEventListener('click', function(){
//     console.log(carsArray[i]);
//   })
// }

// // or // //

btns.forEach(function(btn, i){
  btn.addEventListener('click', function(){
    document.getElementById('details').innerHTML = carsArray[i].info();
    // console.log(carsArray[i]);
  })
})