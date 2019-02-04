import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  choice(_choice) {
    if (_choice == 1) {
      this.navCtrl.push("DepositPage");
    } else if (_choice == 2) {
      this.navCtrl.push("WithdrawalPage");
    } else if (_choice == 3) {
      this.navCtrl.push("BalancePage");
    }  else if (_choice == 4) {
      this.navCtrl.push("AboutMePage");
    } 
}
    }