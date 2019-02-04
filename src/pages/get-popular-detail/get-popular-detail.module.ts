import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetPopularDetailPage } from './get-popular-detail';

@NgModule({
  declarations: [
    GetPopularDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GetPopularDetailPage),
  ],
})
export class GetPopularDetailPageModule {}
