import { TermsPageModule } from './../pages/terms/terms.module';
import { AcknowledgementsPageModule } from './../pages/acknowledgements/acknowledgements.module';
import { PrivacyPageModule } from './../pages/privacy/privacy.module';
import { AboutPageModule } from './../pages/about/about.module';
import { AdMobFree } from '@ionic-native/admob-free';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComponentsModule } from "../components/components.module";
import { MarioServiceProvider } from '../providers/mario-service/mario-service';
import { SlotsPageModule } from "../pages/slots/slots.module";
import { SettingsPageModule } from '../pages/settings/settings.module';
import { LicenseProvider } from '../providers/license';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    HomePage,
    MyApp
  ],
  imports: [
    AboutPageModule,
    AcknowledgementsPageModule,
    BrowserModule,
    ComponentsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    PrivacyPageModule,
    SettingsPageModule,
    SlotsPageModule,
    TermsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    MyApp
  ],
  providers: [
    AdMobFree,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LicenseProvider,
    MarioServiceProvider,
    NativeAudio,
    SplashScreen,
    StatusBar,
    SettingsProvider,
    Storage
  ]
})
export class AppModule { }
