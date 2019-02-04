import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as enums from '../../enums/enums';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  //property
  loginResult;

  user;
  pass;

  loginArray=[];

  myIP = enums.APIURL.URL;

  constructor(public navCtrl: NavController,  public navParams: NavParams, public http: HttpClient) {

  }
/*
  signIn(_username,_password){
    if (_password == '1234') {
      this.loginResult = 'ยินดีต้อนรับเข้าสู่ระบบ ' + _username;
      alert('ยินดีต้อนรับเข้าสู่ระบบ ');
      this.navCtrl.push("AccountPage");
    } else {
      this.loginResult = "Login failed";
    }
  }
*/

signIn(_username,_password){
  let url = this.myIP + '/miniproapp/getAllAccountData.php';
  this.http.get(url).subscribe(
    (data: any) => {
      console.log(data);
      this.loginArray = data.login;
      console.log(this.loginArray);
      for (let i = 0; i < this.loginArray.length; i++) {
        this.user = data.login[i].login_Username;
        this.pass = data.login[i].login_Password;
        let id = data.login[i].login_Id;
        console.log(_username);
        console.log(_password);
        console.log(this.user);
        console.log(this.pass);
        console.log(id);
        
        if(_username == this.user && _password == this.pass){
          break;
        }
    
      }

      if(_username == this.user && _password == this.pass){
        this.loginResult='pass'
        this.navCtrl.push("AccountPage");
        alert('ยินดีต้อนรับ ' + _username);
        
        
      }else{
        alert('Username or Password ผิด ');
       
      } 
      
    }
    );  
}



}//end class