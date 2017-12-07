import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
  public result: any;
  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
    var url = "http://998xp.vicp.net:8000/link"
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
