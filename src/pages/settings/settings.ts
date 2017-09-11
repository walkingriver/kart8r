import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SettingsProvider, KartSettings } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  settings: KartSettings = {
    includeSmall: true,
    includeMedium: true,
    includeLarge: true,
    includeMii: true,
    includeKarts: true,
    includeBikes: true,
    includeATVs: true,
    allowDuplicates: true
  }

  constructor(private settingsService: SettingsProvider) {
  }

  async ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.settings = await this.settingsService.loadSettings();
  }

  ionViewWillUnload() {
    return this.settingsService.saveSettings(this.settings);
  }

  ionViewCanLeave() {
    return this.hasOneCharacter() && this.hasOneVehicle();
  }

  hasOneCharacter() {
    return (this.settings.includeSmall || this.settings.includeMedium || this.settings.includeLarge);
  }

  hasOneVehicle() {
    return (this.settings.includeATVs || this.settings.includeBikes || this.settings.includeKarts);
  }
}
