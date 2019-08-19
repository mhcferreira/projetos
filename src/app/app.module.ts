import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp({
    apiKey: "AIzaSyDIoo8wd4iX91Yx2RsTEixtRCNYI9BwPqg",
   authDomain: "cidade-estado.firebaseapp.com",
   databaseURL: "https://cidade-estado.firebaseio.com",
   projectId: "cidade-estado",
   storageBucket: "cidade-estado.appspot.com",
   messagingSenderId: "774857646386",
   appId: "1:774857646386:web:a2edd0b3b2919ed0"
 }), AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
