import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messageText = '';
  connected = false;
  userId: any;
  messages = [];

  constructor(
    public afDB: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private authServise: AuthService,
    private navCtrl: NavController
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth){
        console.log('Non connecté');
      }else{
        console.log('Utilisateur connecté ' + auth.uid);
        this.connected = true;
        this.userId = auth.uid;
        this.getMessages();
      }
    });
   }

  ngOnInit() {
  }

  onLogOut(){
    this.afAuth.signOut();
    this.connected = false;
    this.navCtrl.navigateForward("/login");
  }

  sendMessge(){
    this.afDB.list('Messages/').push({
      userId: this.userId,
      text: this.messageText,
      date: new Date().toISOString()
    });
    console.log('Message: ' + this.messageText);
    this.messageText = '';
  }

  getMessages() {
    this.afDB.list('Messages/').snapshotChanges(['child_added'])
    .subscribe(actions => {
      this.messages = [];
      actions.forEach(action => {
        console.log('Message: ' + action.payload.exportVal().text);
        this.messages.push({
          text: action.payload.exportVal().text,
          userId: action.payload.exportVal().userId,
          date: action.payload.exportVal().date
        });
      });
    });
  }

}
