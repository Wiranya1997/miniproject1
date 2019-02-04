import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as enums from '../../enums/enums';

/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public http: HttpClient ) {
    this.loadDataDeposit();
  }
  myIP = enums.APIURL.URL;
  DepositArray = [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }
  loadDataDeposit() {
    let url = this.myIP + '/miniproapp/getDeposit.php';
    this.http.get(url).subscribe(
      (data: any) => {
  
        this.DepositArray = data.Deposit;
        console.log(this.DepositArray);
      }
      , (error) => { console.log(error); }
    );
  }

}
