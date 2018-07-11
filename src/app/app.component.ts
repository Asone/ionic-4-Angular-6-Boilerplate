/** Angular Core **/
import { Component, ViewChild } from '@angular/core';

/** Ionic Core **/
// import { Platform, NavController } from 'ionic-angular';

/** Ionic Modules **/

/** Custom Components **/
import { MainPage } from "../pages/main/main.page";

/** Custom Services **/

@Component({
  templateUrl: 'app.html'
})
export class MyApp{
  rootPage:any = MainPage;

//  @ViewChild('content') content: NavController;

  constructor(
   // platform: Platform
    ) {
  //  platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      // Here you can do any higher level native things you might need.
  //  });
  }
}

