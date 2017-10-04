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
import { VipPage } from '../pages/vip/vip';
import { QuitPage } from '../pages/quit/quit';

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
  vip: any = VipPage;
  quit: any = QuitPage;



  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    splashScreen.hide();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: '丽华抗癌问答', component: HomePage },
      { title: '诊断', component: DiagnosisPage },
      { title: '治疗', component: TreatmentPage },
      { title: '知识', component: KnowledgePage },
      { title: '存活', component: SurvivalPage },
      { title: '费用', component: CostPage },
      { title: '心里', component: HeartPage },
      { title: '闲聊', component: ChartPage },
      { title: 'vip', component: VipPage },
      { title: '退出', component: QuitPage }
    
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
}
