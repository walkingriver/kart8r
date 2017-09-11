import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TermsPage } from "../terms/terms";
import { PrivacyPage } from "../privacy/privacy";
import { AcknowledgementsPage } from "../acknowledgements/acknowledgements";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
  }

  viewTerms() {
    this.navCtrl.push(TermsPage);
  }

  viewPrivacyPolicy() {
    this.navCtrl.push(PrivacyPage);
  }

  viewAcknowledgements() {
    this.navCtrl.push(AcknowledgementsPage);
  }
}
