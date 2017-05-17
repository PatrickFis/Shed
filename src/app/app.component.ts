import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

// import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
// import { TestPage } from '../pages/test-page/test-page';
import { LoginPage } from '../pages/login-page/login-page';
import { MainPage } from '../pages/main-page/main-page';
import { AboutPage } from '../pages/about-page/about-page';
// import { WorkoutsPage } from '../pages/workouts-page/workouts-page';
import { Workouts } from '../pages/workouts-list/workouts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make LoginPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      // { title: 'Hello Ionic', component: HelloIonicPage },
      // { title: 'My First List', component: ListPage },
      // { title: 'My First Test Page', component: TestPage },
      { title: 'Login Page', component: LoginPage },
      { title: 'Main Page', component: MainPage },
      { title: 'About', component: AboutPage },
      // { title: 'Workouts', component: WorkoutsPage },
      { title: 'Workouts', component: Workouts }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
