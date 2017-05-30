import { ContactoPage } from './../contacto/contacto';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ContactoPage = ContactoPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  
  }

  public contactos = [
    {
      'nombre': 'diego',
      'img': 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'
    },{
      'nombre': 'diego 1',
      'img':'https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png'
    },{
      'nombre': 'diego 2',
      'img': 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'      
    },{
      'nombre': 'diego 3',
      'img':'https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png'      
    },{
      'nombre': 'diego 4',
      'img': 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'            
    },

  ]

}
