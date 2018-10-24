import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DiagnosisPage  } from '../pages/diagnosis/diagnosis';
import { TreatmentPage  } from '../pages/treatment/treatment';
import { KnowledgePage  } from '../pages/knowledge/knowledge';
import { SurvivalPage  } from '../pages/survival/survival';
import { CostPage  } from '../pages/cost/cost';
import { HeartPage  } from '../pages/heart/heart';
import { ChartPage  } from '../pages/chart/chart';
import { VipPage  } from '../pages/vip/vip';
import { TransmitPage } from '../pages/transmit/transmit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DiagnosisPage,
    TreatmentPage,
    KnowledgePage,
    SurvivalPage,
    CostPage,
    HeartPage,
    ChartPage,
    VipPage,
    TransmitPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DiagnosisPage,
    TreatmentPage,
    KnowledgePage,
    SurvivalPage,
    CostPage,
    HeartPage,
    ChartPage,
    VipPage,
    TransmitPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
