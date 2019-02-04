import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BaCodeScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ba-code-scanner',
  templateUrl: 'ba-code-scanner.html',
})
export class BaCodeScannerPage {
//(1)property
scanText = "";
scanFormat = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,private scanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaCodeScannerPage');
  }

  //(2)
Scan(){
  this.scanner.scan().then(
    data => {
      this.scanText = data.text;
      this.scanFormat = data.format;

   }
   ,
     err => {
       console.log('Error', err);}
       );
}
}
