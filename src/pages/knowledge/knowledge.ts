import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KnowledgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-knowledge',
  templateUrl: 'knowledge.html',
})
export class KnowledgePage {
  public result: any;
  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KnowledgePage');
    var url = "http://998xp.vicp.net:8000/search"
    var that = this;
    this.http.get(url).subscribe(
      function (data) {
        console.log(data);
        that.result = data['_body'];
        this.result = that.result;
      }, function (err) {
      }
    )
  }

}
