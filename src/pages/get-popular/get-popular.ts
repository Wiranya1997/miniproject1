import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as Enums from '../../enums/enums';
/**
 * Generated class for the GetPopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-popular',
  templateUrl: 'get-popular.html',
})
export class GetPopularPage { 

 
  moviepopular = [];
  Myip = Enums.APIURL.URL;


 
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadMovieData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetPopularPage');
  } 
  loadMovieData(){
    let url = this.Myip + 'https://api.themoviedb.org/3/movie/popular?api_key=b4e1da8db33117e80ca69a5af4b7bc3e&language=en-US&page=1';
    this.http.get(url).subscribe(
      (data:any) =>{
        
        this.moviepopular = data.results;
        console.log(this.moviepopular) ;
      }
      ,(error) =>{console.log (error);
      }

    );

  }
  GetPopularDetailPage(myMovie ){
    this.navCtrl.push("GetPopularDetailPage",myMovie);
  }
}