import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as enums from '../../enums/enums';
/**
 * Generated class for the BalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class BalancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public http: HttpClient ) {
    this.loadDataBalance();
  }
  myIP = enums.APIURL.URL;
  BalanceArray = [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }
  loadDataBalance() {
    let url = this.myIP + '/miniproapp/getBalance.php';
    this.http.get(url).subscribe(
      (data: any) => {
  
        this.BalanceArray = data.Balance;
        console.log(this.BalanceArray);
      }
      , (error) => { console.log(error); }
    );
  }

}
