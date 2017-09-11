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
import { TestPageModule } from "../pages/test/test.module";
import { SlotsPageModule } from "../pages/slots/slots.module";
import { AboutPage } from '../pages/about/about';
import { AcknowledgementsPage } from '../pages/acknowledgements/acknowledgements';
import { PrivacyPage } from '../pages/privacy/privacy';
import { TermsPage } from '../pages/terms/terms';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { LicenseProvider } from '../providers/license';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AboutPage,
    AcknowledgementsPage,
    HomePage,
    MyApp,
    PrivacyPage,
    TermsPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    SettingsPageModule,
    SlotsPageModule,
    TestPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AboutPage,
    AcknowledgementsPage,
    HomePage,
    MyApp,
    PrivacyPage,
    TermsPage
  ],
  providers: [
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LicenseProvider,
    MarioServiceProvider,
    NativeAudio,
    SplashScreen,
    StatusBar
  ]
})
export class AppModule {}
