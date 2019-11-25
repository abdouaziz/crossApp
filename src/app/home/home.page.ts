import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contact={
    nom:"Diop" ,
    prenom:"Abdou Aziz",
    tel:"773097787",
    logo:"assets/image/tdsi.png" ,
    location:"assets/image/loc.PNG"
  } ;

  constructor() {}

}
