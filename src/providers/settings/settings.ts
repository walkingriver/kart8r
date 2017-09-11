import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface KartSettings {
  includeSmall: boolean,
  includeMedium: boolean,
  includeLarge: boolean,
  includeKarts: boolean,
  includeBikes: boolean,
  includeATVs: boolean,
  allowDuplicates: boolean
}

@Injectable()
export class SettingsProvider {

  defaultSettings: KartSettings = {
    includeSmall: true,
    includeMedium: true,
    includeLarge: true,
    includeKarts: true,
    includeBikes: true,
    includeATVs: true,
    allowDuplicates: true
  }

  settingsCache: KartSettings;

  constructor(private storage: Storage) {
    console.log('Hello SettingsProvider Provider');
  }

  saveSettings(settings: KartSettings): Promise<any> {
    Object.assign(this.settingsCache, settings);
    return this.storage.set('kart-settings', settings);
  }

  async loadSettings(): Promise<KartSettings> {
    if (this.settingsCache) {
      return Promise.resolve(this.settingsCache);
    }

    this.settingsCache = (await this.storage.get('kart-settings')) || this.defaultSettings;

    return this.settingsCache;
  }
}

