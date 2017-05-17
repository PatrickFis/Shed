import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { WorkoutDetailsPage } from '../workout-details/workout-details';

@Component({
  selector: 'page-workouts-list',
  templateUrl: 'workouts.html'
})
export class Workouts {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  titles: string[];
  notes: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    // Titles for each workout
    this.titles = ['Upper', 'Lower', 'Arms, Abs, Etc.', 'Shredder', 'Full Body'];
    // Descriptions for each workout
    this.notes = ['Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder'];

    this.items = [];
    for(let i = 0; i < this.titles.length; i++) {
      this.items.push({
        title: this.titles[i],
        note: this.notes[i],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(WorkoutDetailsPage, {
      item: item
    });
  }
}
