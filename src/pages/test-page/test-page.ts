import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-test-page',
  templateUrl: 'test-page.html'
})
export class TestPage {
  constructor(public alertCtrl: AlertController) {

  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Test Alert!',
      subTitle: 'Test Alert 1',
      buttons: ['OK']
    });
    alert.present();
  }
}
