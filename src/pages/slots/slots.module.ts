import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlotsPage } from './slots';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    SlotsPage,
  ],
  imports: [
    IonicPageModule.forChild(SlotsPage),
    ComponentsModule
  ],
})
export class SlotsPageModule {}
