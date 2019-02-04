import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GmapPage } from './gmap';

@NgModule({
  declarations: [
    GmapPage,
  ],
  imports: [
    IonicPageModule.forChild(GmapPage),
  ],
})
export class GmapPageModule {}
