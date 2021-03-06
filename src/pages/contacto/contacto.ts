import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  public contacto: Object;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.contacto = navParams.data;
    console.log(this.contacto);
    
  }
  

}
