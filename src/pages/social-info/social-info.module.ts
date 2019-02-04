import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialInfoPage } from './social-info';

@NgModule({
  declarations: [
    SocialInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialInfoPage),
  ],
})
export class SocialInfoPageModule {}
