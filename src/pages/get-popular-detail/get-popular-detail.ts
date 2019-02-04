import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as Enums from '../../enums/enums';
/**
 * Generated class for the MovieGetTopRateDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-popular-detail',
  templateUrl: 'get-popular-detail.html',
})
export class GetPopularDetailPage {
  moviepopular = "";
  Myip = Enums.APIURL.URL;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetPopularDetailPage');
    this.moviepopular = this.navParams.data;
    console.log(this.moviepopular);
  }

}//end class
