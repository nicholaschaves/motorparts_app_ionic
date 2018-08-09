import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelmetsPage } from '../helmets/helmets';
import { MirrorsPage } from '../mirrors/mirrors';
import { TiresPage } from '../tires/tires';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  goToHelmetsPage(){
    this.navCtrl.push(HelmetsPage)
  }

  goToMirrorsPage(){
    this.navCtrl.push(MirrorsPage)
  }

  goToTiresPage(){
    this.navCtrl.push(TiresPage)
  }
}
