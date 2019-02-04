import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as enums from '../../enums/enums';
/**
 * Generated class for the WithdrawalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdrawal',
  templateUrl: 'withdrawal.html',
})
export class WithdrawalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public http: HttpClient ) {
    this.loadDataWithdrawal();
  }
  myIP = enums.APIURL.URL;
  WithdrawalArray = [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }
  loadDataWithdrawal() {
    let url = this.myIP + '/miniproapp/getWithdrawal.php';
    this.http.get(url).subscribe(
      (data: any) => {
  
        this.WithdrawalArray = data.Withdrawal;
        console.log(this.WithdrawalArray);
      }
      , (error) => { console.log(error); }
    );
  }

}
