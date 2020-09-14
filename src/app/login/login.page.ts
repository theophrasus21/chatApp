import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public afDB: AngularFireDatabase,
    public fireauth: AngularFireAuthModule,
    public activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }
   
}
