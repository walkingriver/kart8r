import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SettingsProvider {

  defaultSettings = {
    includeSmall: true,
    includeMedium: true,
    includeLarge: true,
    includeKarts: true,
    includeBikes: true,
    includeATVs: true,
    allowDuplicates: true
  }

  constructor(private storage: Storage) {
    console.log('Hello SettingsProvider Provider');
  }

  saveSettings(settings) {
    return this.storage.set('kart-settings', settings);
  }

  async loadSettings() {
    let savedSettings = await this.storage.get('kart-settings');

    if (savedSettings) {
      Object.assign(this.defaultSettings, savedSettings);
    }

    return this.defaultSettings;
  }
}

