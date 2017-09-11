import { Component, ViewChild } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { MkItem, MarioServiceProvider } from "../../providers/mario-service/mario-service";
import { NativeAudio } from "@ionic-native/native-audio";
import { AdMobFree, AdMobFreeBannerConfig } from "@ionic-native/admob-free";
import { SettingsProvider, KartSettings } from '../../providers/settings/settings';
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

  settings: KartSettings;

  constructor(private admob: AdMobFree,
    ms: MarioServiceProvider,
    private nativeAudio: NativeAudio,
    private platform: Platform,
    private settingsService: SettingsProvider) {
    this.characters = ms.allCharacters();
    this.wheels = ms.allTires();
    this.wings = ms.allWings();
    this.karts = ms.allVehicles();
  }

  async ionViewWillEnter() {
    this.settings = await this.settingsService.loadSettings();
    console.log('Settings: ', this.settings);
  }

  async ionViewDidLoad() {
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
    
    await this.platform.ready();
    let soundFile = this.getSoundFile();
    console.log('Looking for sound file: ', soundFile);
    this.nativeAudio.preloadSimple('item-box', soundFile)
    .then(() => console.log('Sound Loaded'))
    .catch((err) => console.error('Could not load sound file.', err));

    this.showBanner();
  }

  getSoundFile() {
    // if (this.platform.is('android')) {
    //   return 'file:///android_asset/www/assets/sounds/item-box.mp3';
    // }
    return 'assets/sounds/item-box.mp3';
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

    let chars = this.randomizeChar();
    console.log('Valid Chars: ', chars);

    let karts = this.randomizeKart();
    console.log('Valid Karts: ', karts);

    let wheels = this.randomizeTire();
    let wings = this.randomizeWing();

    if (n--) {
      this.charSpinner[n].spin(shuffleTime, chars[0].name);
      this.kartSpinner[n].spin(shuffleTime, karts[0].name);
      this.wheelSpinner[n].spin(shuffleTime, wheels[0].name);
      this.wingSpinner[n].spin(shuffleTime, wings[0].name);
    } else {
      for (let i = 0; i < 4; i++) {
        this.charSpinner[i].spin(shuffleTime, chars[i].name);
        this.kartSpinner[i].spin(shuffleTime, karts[i].name);
        this.wheelSpinner[i].spin(shuffleTime, wheels[i].name);
        this.wingSpinner[i].spin(shuffleTime, wings[i].name);
      }
    }
  }

  shufflePlayer(player) {
    this.shuffle(player);
  }

  randomizeChar() {
    let characters = _.filter(this.characters, (i: MkItem) => {
      if (i.itemType === 's' && this.settings.includeSmall) { return i; }
      if (i.itemType === 'm' && this.settings.includeMedium) { return i; }
      if (i.itemType === 'l' && this.settings.includeLarge) { return i; }
      if (i.itemType === 'mii' && this.settings.includeMii) { return i; }
    });

    if (this.settings.allowDuplicates) {
      return this.buildRandomList(characters, 4);
    } else {
      return _.shuffle(characters);
    }
  }

  randomizeKart() {
    let karts = _.filter(this.karts, (i: MkItem) => {
      if (i.itemType === 'k' && this.settings.includeKarts) { return i; }
      if (i.itemType === 'b' && this.settings.includeBikes) { return i; }
      if (i.itemType === 'a' && this.settings.includeATVs) { return i; }
    });

    if (this.settings.allowDuplicates) {
      return this.buildRandomList(this.karts, 4);
    } else {
      return _.shuffle(karts);
    }
  }

  randomizeWing() {
    if (this.settings.allowDuplicates) {
      return this.buildRandomList(this.wings, 4);
    } else {
      return _.shuffle(this.wings);
    }
  }

  randomizeTire() {
    if (this.settings.allowDuplicates) {
      return this.buildRandomList(this.wheels, 4);
    } else {
      return _.shuffle(this.wheels);
    }
  }

  buildRandomList(list: MkItem[], count: number): MkItem[] {
    let result = <MkItem[]>[];

    for (let i = 0; i < count; i++) {
      let r = Math.floor(Math.random() * (list.length - 1));
      result.push(list[r]);
    }

    return result;
  }
}
