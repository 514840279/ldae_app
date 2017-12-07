import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HeartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-heart',
  templateUrl: 'heart.html',
})
export class HeartPage {
  public result: any;
  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeartPage');
    var url = "http://998xp.vicp.net:8000/hot"
    var that = this;
    this.http.get(url).subscribe(
      function (data) {
        that.result = data['_body'];
        this.result = that.result;
      }, function (err) {
      }
    )
  }

}
