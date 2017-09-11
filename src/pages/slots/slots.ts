import { Component, ViewChild } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { MkItem, MarioServiceProvider } from "../../providers/mario-service/mario-service";
import { NativeAudio } from "@ionic-native/native-audio";
import { AdMobFree, AdMobFreeBannerConfig } from "@ionic-native/admob-free";
import { SettingsProvider } from '../../providers/settings/settings';
import * as _ from 'lodash';

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

  @ViewChild('char1') char1;
  @ViewChild('char2') char2;
  @ViewChild('char3') char3;
  @ViewChild('char4') char4;
  @ViewChild('kart1') kart1;
  @ViewChild('kart2') kart2;
  @ViewChild('kart3') kart3;
  @ViewChild('kart4') kart4;
  @ViewChild('wheel1') wheel1;
  @ViewChild('wheel2') wheel2;
  @ViewChild('wheel3') wheel3;
  @ViewChild('wheel4') wheel4;
  @ViewChild('wing1') wing1;
  @ViewChild('wing2') wing2;
  @ViewChild('wing3') wing3;
  @ViewChild('wing4') wing4;

  charSpinner = [];
  kartSpinner = [];
  wheelSpinner = [];
  wingSpinner = [];

  adMob = {
    iosBanner: 'ca-app-pub-5422413832537104~8265205046',
    iosUnitId: 'ca-app-pub-5422413832537104/7492067479',
    androidBanner: 'ca-app-pub-5422413832537104~9882319296',
    androidUnitId: 'ca-app-pub-5422413832537104/6984693219'
  };

  settings;

  constructor(private admob: AdMobFree,
    private ms: MarioServiceProvider,
    private nativeAudio: NativeAudio,
    private platform: Platform,
    private settingsService: SettingsProvider) {
    this.characters = ms.allCharacters();
    this.wheels = ms.allTires();
    this.wings = ms.allWings();
    this.karts = ms.allVehicles();

    this.nativeAudio.preloadSimple('item-box', 'assets/sounds/item-box.mp3')
      .then(() => console.log('Sound Loaded'))
      .catch((err) => console.error('Could not load sound file.', err));
  }

  async ionViewWillEnter() {
    // this.settings = await this.settingsService.loadSettings();
    // this.characters = _.filter(this.ms.allCharacters(), (i: MkItem) => {
    //   if (i.itemType === 's' && this.settings.includeSmall) { return i; }
    //   if (i.itemType === 'm' && this.settings.includeMedium) { return i; }
    //   if (i.itemType === 'l' && this.settings.includeLarge) { return i; }
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlotsPage');

    this.charSpinner[0] = this.char1;
    this.charSpinner[1] = this.char2;
    this.charSpinner[2] = this.char3;
    this.charSpinner[3] = this.char4;
    this.kartSpinner[0] = this.kart1;
    this.kartSpinner[1] = this.kart2;
    this.kartSpinner[2] = this.kart3;
    this.kartSpinner[3] = this.kart4;
    this.wheelSpinner[0] = this.wheel1;
    this.wheelSpinner[1] = this.wheel2;
    this.wheelSpinner[2] = this.wheel3;
    this.wheelSpinner[3] = this.wheel4;
    this.wingSpinner[0] = this.wing1;
    this.wingSpinner[1] = this.wing2;
    this.wingSpinner[2] = this.wing3;
    this.wingSpinner[3] = this.wing4;

    this.showBanner();
  }

  showBanner() {
    let id: string;

    if (this.platform.is('ios')) {
      id = this.adMob.iosUnitId;
    } else {
      id = this.adMob.androidUnitId;
    }

    console.log('Using AdMob ID: ', id);

    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false,
      id: id,
      bannerAtTop: false
    };

    this.admob.banner.config(bannerConfig);
    this.admob.banner.prepare()
      .then(() => { })
      .catch(e => console.error(e));
  }

  shuffle(n) {
    this.showBanner();
    const shuffleTime = 2000;
    this.nativeAudio.play('item-box');

    if (n--) {
      this.charSpinner[n].spin(shuffleTime);
      this.kartSpinner[n].spin(shuffleTime);
      this.wheelSpinner[n].spin(shuffleTime);
      this.wingSpinner[n].spin(shuffleTime);
    } else {
      for (let i = 0; i < 4; i++) {
        this.charSpinner[i].spin(shuffleTime);
        this.kartSpinner[i].spin(shuffleTime);
        this.wheelSpinner[i].spin(shuffleTime);
        this.wingSpinner[i].spin(shuffleTime);
      }
    }
  }

  shufflePlayer(player) {
    this.shuffle(player);
  }


}
