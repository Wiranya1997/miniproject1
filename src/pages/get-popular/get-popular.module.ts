import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetPopularPage } from './get-popular';

@NgModule({
  declarations: [
    GetPopularPage,
  ],
  imports: [
    IonicPageModule.forChild(GetPopularPage),
  ],
})
export class GetPopularPageModule {}
