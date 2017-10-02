import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public search:any;
  public result:any;
  icons: string;
  constructor(private http:Http,public navCtrl: NavController,public loadingCtrl: LoadingController) {
    this.search="";
    this.icons = 'search';

  }

  getSearch(e){
   
    if(e.keyCode==13){
      this.dosearch();
    }

  }



 

  dosearch(){
    if(this.search==""){
      let msg = this.loadingCtrl.create({
        content: '请输入要咨询的问题或关键词'//设置loading时显示的文字
      });
      msg.present();
      setTimeout(()=>{ msg.dismiss(); },2000);
      return;
    }
    let loading = this.loadingCtrl.create({
      content: '正在为您查找最佳答案'//设置loading时显示的文字
    });

    loading.present();
    var that = this;
    var url = "http://998xp.vicp.net:8000/api?q="+this.search
    that.http.get(url).subscribe(
      function(data){
        that.result = data['_body'];
        this.search="";
        this.result = that.result;
        loading.dismiss();
      },function(err){
        loading.dismiss();
      }
    )
  }
}