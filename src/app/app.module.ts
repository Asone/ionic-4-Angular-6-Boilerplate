
/** Ionic Core **/
import { IonicModule } from '@ionic/angular';

/** Ionic Modules **/

/** Angular Core **/
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/** Custom Components **/
import { MyApp } from './app.component';

/** Custom Services **/

/** Pages Modules **/

import { SharedModule } from './shared.module';
import { MainPage } from '../pages/main';

/** Custom Models **/

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    MyApp,
    MainPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
  ],
  bootstrap: [MyApp],
  entryComponents: [
    MyApp,
    MainPage
  ],
  providers: [
  ]
})
export class AppModule {
    constructor () {}
}