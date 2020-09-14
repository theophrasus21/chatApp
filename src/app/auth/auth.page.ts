import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isAuth: boolean;
  mode: string;
  id: string;
  authForm: FormGroup;
  errorMessage: string;
  connected = false;

  constructor(
     public formBuilder: FormBuilder,
     private afAuth: AngularFireAuth,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    public afDB: AngularFireDatabase,    
    public navCtrl: NavController,
) {
  this.authForm =  this.formBuilder.group({name: ['', [Validators.required]]});
  this.afAuth.authState.subscribe(auth => {
    if (!auth){
      console.log('Non connecté');
    }
  });
  
 }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.initForm();
  }
  initForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    if (this.id === '1') {
      this.authService.signUpUser(email, password).then(
        () => {
          this.navCtrl.navigateForward("/chat");
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    } else if (this.id === '2') {
      this.authService.signInUser(email, password).then(
        () => {
          this.navCtrl.navigateForward("/chat");
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }
  



}
