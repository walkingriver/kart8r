import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MkItem, MarioServiceProvider } from "../../providers/mario-service/mario-service";

@IonicPage()
@Component({
  selector: 'page-slots',
  templateUrl: 'slots.html',
})
export class SlotsPage {
  karts: MkItem[];
  wings: MkItem[];
  wheels: MkItem[];
  characters: MkItem[];

  @ViewChild('kart1') kart1;
  @ViewChild('kart2') kart2;
  @ViewChild('kart3') kart3;
  @ViewChild('kart4') kart4;

  kartWheels = [];

  constructor(ms: MarioServiceProvider) {
    this.characters = ms.allCharacters();
    this.wheels = ms.allTires();
    this.wings = ms.allWings();
    this.karts = ms.allVehicles();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlotsPage');

    this.kartWheels[0] = this.kart1;
    this.kartWheels[1] = this.kart2;
    this.kartWheels[2] = this.kart3;
    this.kartWheels[3] = this.kart4;
  }

  shuffle() {
    for (let i = 0; i < this.kartWheels.length; i++) {
      this.kartWheels[i].spin(2000);
    }
  }

}
