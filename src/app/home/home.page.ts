import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  onGoToAppareils() {
    this.navCtrl.navigateForward("/appareils")
  }

}
