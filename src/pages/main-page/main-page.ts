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
      title: "Amzie Williams",
      description: "Co-owner",
      image: "assets/img/Amzie.jpg",
    },
    {
      title: "Jody Rogers",
      description: "Co-owner",
      image: "assets/img/Jody.jpg",
    },
    {
      title: "Cody McDermott",
      description: "Trainer",
      image: "assets/img/Cody.jpg",
    },
    {
      title: "Brittany Farrar",
      description: "Trainer",
      image: "assets/img/Brittany.jpg",
    },
    {
      title: "Theresa Fischer",
      description: "Trainer",
      image: "assets/img/Theresa.jpg",
    },
    {
      title: "Misty Stewart",
      description: "Trainer",
      image: "assets/img/Misty.jpg",
    },
    {
      title: "Derrick Brown",
      description: "Trainer",
      image: "assets/img/Derrick.jpeg",
    },
    {
      title: "Rachael Rodgers",
      description: "Staff",
      image: "assets/img/Rachael.jpg",
    },
    {
      title: "Megan Stauffer",
      description: "Staff",
      image: "assets/img/Megan.jpeg",
    },
    {
      title: "Jeff Wade",
      description: "",
      image: "assets/img/Jeff.jpg",
    },
    {
      title: "Ali Moran",
      description: "Trainer",
      image: "assets/img/Ali.jpg",
    },
    {
      title: "Kristen Nicholson",
      description: "Trainer",
      image: "assets/img/Kristen.jpg",
    },
  ];
}
