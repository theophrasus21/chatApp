import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {

  name: string;

  constructor(
    public navParams: NavParams,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('appareilName');
  }

  

}
