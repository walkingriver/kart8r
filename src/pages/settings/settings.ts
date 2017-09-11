import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  settings = {
    includeSmall: true,
    includeMedium: true,
    includeLarge: true,
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
}
