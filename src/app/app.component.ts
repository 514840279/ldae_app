import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// 引用
import { HomePage } from '../pages/home/home';
import { DiagnosisPage } from '../pages/diagnosis/diagnosis';
import { TreatmentPage } from '../pages/treatment/treatment';
import { KnowledgePage } from '../pages/knowledge/knowledge';
import { SurvivalPage } from '../pages/survival/survival';
import { CostPage } from '../pages/cost/cost';
import { HeartPage } from '../pages/heart/heart';
import { ChartPage } from '../pages/chart/chart';
//import { VipPage } from '../pages/vip/vip';
import { TransmitPage } from '../pages/transmit/transmit';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // 使用
  rootPage: any = HomePage;
  diagnosis: any = DiagnosisPage;
  treatment: any = TreatmentPage;
  Knowledge: any = KnowledgePage;
  survival: any = SurvivalPage;
  cost: any = CostPage;
  heart: any = HeartPage;
  chart: any = ChartPage;
  //vip: any = VipPage;
  transmit: any = TransmitPage;



  pages: Array<{title: string, component: any,icons:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    splashScreen.hide();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: '默认', component: HomePage,icons:'fds' },
      { title: '诊断', component: DiagnosisPage, icons: 'fds'},
      { title: '治疗', component: TreatmentPage, icons: 'fds'},
      { title: '知识', component: KnowledgePage, icons: 'fds'},
      { title: '存活', component: SurvivalPage, icons: 'fds'},
      { title: '费用', component: CostPage, icons: 'fds'},
      { title: '心理', component: HeartPage, icons: 'fds'},
      { title: '闲聊', component: ChartPage, icons: 'fds'},
      //{ title: 'VIP', component: VipPage },
      { title: '转发', component: TransmitPage, icons: 'fds' }
    
    ];
    

  }
 
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  close() {
    this.platform.exitApp();
  }
}
