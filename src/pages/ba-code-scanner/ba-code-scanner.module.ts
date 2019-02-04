import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaCodeScannerPage } from './ba-code-scanner';

@NgModule({
  declarations: [
    BaCodeScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(BaCodeScannerPage),
  ],
})
export class BaCodeScannerPageModule {}
