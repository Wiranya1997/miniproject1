import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutMePage } from './about-me';

@NgModule({
  declarations: [
    AboutMePage,
  ],
  imports: [
    IonicPageModule.forChild(AboutMePage),
  ],
})
export class AboutMePageModule {}
