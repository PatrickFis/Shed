import { Component } from '@angular/core';

@Component({
  selector: 'page-main-page',
  templateUrl: 'main-page.html'
})
export class MainPage {
  constructor() {

  }
  slides = [
    {
      title: "Trainer 1",
      description: "Description here",
      image: "assets/img/trainer1.jpg",
    },
    {
      title: "Trainer 2",
      description: "Description here",
      image: "assets/img/trainer2.jpg",
    },
    {
      title: "Trainer 3",
      description: "Description here",
      image: "assets/img/trainer3.jpg",
    }
  ];
}
