function Car(model, fuelType) {
  this.model = model;
  this.fuelType = fuelType;
}

function Brand(brand) {
  Car.call(this, "XM", "petrol");
  this.brand = brand;
}

// const BMW = new Car("XM", "petrol");
// const newCar = new Brand("BMW");
// console.log(newCar);

const person = {
  getFullName: function (hometown,dist) {
    return this.firstName + " " + this.lastName + " " + hometown + " " + dist;
  },
};

const person1 = {
  firstName: "Dilawar",
  lastName: "Hossain",
};

const data = person.getFullName.apply(person1,[ "Beldanga","MSD"]);

// console.log(data);

const maxData = Math.max.bind(Math,6,77,90,80,110);

console.log(setTimeout(maxData,10000))

// console.log(maxData())

