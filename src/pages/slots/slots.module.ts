import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlotsPage } from './slots';

@NgModule({
  declarations: [
    SlotsPage,
  ],
  imports: [
    IonicPageModule.forChild(SlotsPage),
  ],
})
export class SlotsPageModule {}
