import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { TermsPage } from '../pages/terms/terms';
import { PrivacyPage } from '../pages/privacy/privacy';
import { AcknowledgementsPage } from '../pages/acknowledgements/acknowledgements';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(private nav: NavController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goHome() {
    this.nav.setRoot(this.rootPage);
  }

  goAbout() {
    this.nav.push(AboutPage);
  }

  goTerms() {
    this.nav.push(TermsPage);
  }

  goPrivacy() {
    this.nav.push(PrivacyPage);
  }

  goAcknowledgements() {
    this.nav.push(AcknowledgementsPage);
  }
}


