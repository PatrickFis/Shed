import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { ItemDetailsPage } from '../pages/item-details/item-details';
// import { ListPage } from '../pages/list/list';
// import { TestPage } from '../pages/test-page/test-page';
import { LoginPage } from '../pages/login-page/login-page';
import { MainPage } from '../pages/main-page/main-page';
import { AboutPage, AboutModal } from '../pages/about-page/about-page';
// import { WorkoutsPage } from '../pages/workouts-page/workouts-page';
import { WorkoutDetailsPage } from '../pages/workout-details/workout-details';
import { Workouts } from '../pages/workouts-list/workouts';
import { BuyWorkouts } from '../pages/buy-workouts/buy-workouts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '6fed8bd7'
  }
};

@NgModule({
  declarations: [
    MyApp,
    // HelloIonicPage,
    // ItemDetailsPage,
    // ListPage,
    // TestPage,
    LoginPage,
    MainPage,
    AboutPage,
    // WorkoutsPage,
    WorkoutDetailsPage,
    Workouts,
    BuyWorkouts,
    AboutModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HelloIonicPage,
    // ItemDetailsPage,
    // ListPage,
    // TestPage,
    LoginPage,
    MainPage,
    AboutPage,
    // WorkoutsPage,
    WorkoutDetailsPage,
    Workouts,
    BuyWorkouts,
    AboutModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
