import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];
  // items = [{id: 3, name: 'item1'},{id: 6, name: 'item2'},{id: 9, name: 'item3'}]
dates = [
  new Date(2015, 3, 4).toDateString(),
  new Date(2011, 2, 5).toDateString(),
  new Date(2017, 4, 6).toDateString(),
  new Date(2000, 1, 7).toDateString(),
]
  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  // setBigCarText(car: string) {
  //   return car.length > 4 ? true : false;
  // }

}
