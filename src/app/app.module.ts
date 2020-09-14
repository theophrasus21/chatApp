import { NgModule } from '@angular/core';
import * as firebase from 'firebase';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../app/services/auth.service';

import { FCM } from '@ionic-native/fcm/ngx';

export const firebaseConfig = {
  apiKey: "AIzaSyAHJJgrRIwKZje-szwBDMM0a8ukH3rGU3Q",
  authDomain: "guiloumeni1.firebaseapp.com",
  databaseURL: "https://guiloumeni1.firebaseio.com",
  projectId: "guiloumeni1",
  storageBucket: "guiloumeni1.appspot.com",
  messagingSenderId: "1048425840911",
  appId: "1:1048425840911:web:aca9842e7b1706f8507e7a"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    AuthService,
    FCM,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
