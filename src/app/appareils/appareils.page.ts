import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SingleAppareilPage } from '../single-appareil/single-appareil.page';


@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {

  appareilName = [
    {
      appareilName:'Machine à laver'},
    {
      appareilName:'Télévision'
    }
  ]

  constructor(
    public navCtrl: NavController,
    public router: Router
  ) { }

  ngOnInit() {
  }
  onLoadAppareil(name: string) {
    //routerLink ="['single-profil', profil.id
  }
}
