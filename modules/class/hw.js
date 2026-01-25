'use strict';

class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.mileage = mileage;
  }

  set mileage(value) {
    this.#mileage = value;
  }

  get mileage() {
    return this.#mileage;
  }

  info() {
    console.log(
      `brand: ${this.#brand}, model: ${this.#model}, mileage: ${this.#mileage}`,
    );
  }
}

const car = new Car('Toyota', 'GR-86', 1000);
car.info();
