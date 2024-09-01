import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDrag} from '@angular/cdk/drag-drop';
//import {MDCSlider} from '@material/slider';
//import {MatSliderModule} from '@angular/material/slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { NgxGaugeModule } from 'ngx-gauge';
//import { ProgressBarComponent } from './progress-bar/progress-bar.component';

import { AppComponent } from './app.component';
import { AvalehtComponent} from './avaleht/avaleht.component';

import { AppRoutingModule } from './app-routing.module';

import { Alaleht1Component } from './alaleht1/alaleht1.component';
import { Alaleht2Component } from './alaleht2/alaleht2.component';
import { Alaleht3Component } from './alaleht3/alaleht3.component';
import { Alaleht4Component } from './alaleht4/alaleht4.component';
import { Alaleht5Component } from './alaleht5/alaleht5.component';
import { Alaleht6Component } from './alaleht6/alaleht6.component';
import { Alaleht7Component } from './alaleht7/alaleht7.component';
import { Alaleht8Component } from './alaleht8/alaleht8.component';
import { AlatabelComponent } from './alatabel/alatabel.component';
import { AkordionComponent } from './akordion/akordion.component';
import { AlagraafikComponent } from './alagraafik/alagraafik.component';
import { Alagraafik1Component } from './alagraafik1/alagraafik1.component';
import { AlainfoComponent } from './alainfo/alainfo.component';
import { Alainfo1Component } from './alainfo1/alainfo1.component';
import { Alainfo2Component } from './alainfo2/alainfo2.component';
import { Alainfo3Component } from './alainfo3/alainfo3.component';
import { Alainfo4Component } from './alainfo4/alainfo4.component';
import { Alainfo5Component } from './alainfo5/alainfo5.component';
import { Alainfo6Component } from './alainfo6/alainfo6.component';
import { Alainfo7Component } from './alainfo7/alainfo7.component';
import { Alasisend1Component } from './alasisend1/alasisend1.component';
import { Alasisend2Component } from './alasisend2/alasisend2.component';
import { Alasisend3Component } from './alasisend3/alasisend3.component';
import { Alasisend4Component } from './alasisend4/alasisend4.component';
//import { TabGroupAlignExample } from './tabs/tabs.component';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';


@NgModule({
  imports: [
    BrowserModule,
    CdkDrag,
    NgxSliderModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts 
    }),
    //NgxEchartsModule,
    
    NgxGaugeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AvalehtComponent },
      //{ path: '', component: ProductListComponent },
    ])
  ],
  //entryComponents: [Alasisend2Component],
  declarations: [
    AppComponent,
    AvalehtComponent,
    Alaleht1Component,
    Alaleht2Component,
    Alaleht3Component,
    Alaleht4Component,
    Alaleht5Component,
    Alaleht6Component,
    Alaleht7Component,
    Alaleht8Component,
    AlatabelComponent,
    AkordionComponent,
    AlagraafikComponent,
    Alagraafik1Component,
    AlainfoComponent,
    Alainfo1Component,
    Alainfo2Component,
    Alainfo3Component,
    Alainfo4Component,
    Alainfo5Component,
    Alainfo6Component,
    Alainfo7Component,
    Alasisend1Component,
    Alasisend2Component,
    Alasisend3Component,
    Alasisend4Component
    
    
  ],
  bootstrap: [
    AppComponent, Alasisend2Component
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/