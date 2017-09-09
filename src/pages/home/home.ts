import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MkContainerComponent } from "../../components/mk-container/mk-container";
import { MarioServiceProvider } from './../../providers/mario-service/mario-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mk: MkContainerComponent;
  characters: any[];
  api: any = {};

  constructor(public navCtrl: NavController, private ms: MarioServiceProvider) {
    this.characters = ms.allCharacters();
  }

  toggle() {
    if (this.api.toggle) {
      this.api.toggle();
    }
  }
}
