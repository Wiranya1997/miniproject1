import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialInfoPage } from '../pages/social-info/social-info';
import { SMS } from '@ionic-native/sms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BaCodeScannerPage } from '../pages/ba-code-scanner/ba-code-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { GmapPage } from '../pages/gmap/gmap';
import { AccountPage } from '../pages/account/account';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SocialInfoPage,BaCodeScannerPage,GmapPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SocialInfoPage,BaCodeScannerPage,GmapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    BarcodeScanner,
    Geolocation,
    AccountPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
