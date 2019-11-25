import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menus =[
    {title:'Home' ,url:'/menu/home' ,icon:'home'} ,
    {title:'Meteo' ,url:'/menu/meteo' ,icon:'snow'} ,
    {title:'Gallery' ,url:'/menu/gallery' ,icon:'hammer'} ,
    {title:'Location' ,url:'/menu/location' ,icon:'pin'} ,
    {title:'Logout' ,url:'logout' ,icon:'log-out'} 
  ]

  constructor(private router:Router , private authenService:AuthenticationService) { }

  ngOnInit() {
  }

  onMenuItem(m){
    if(m.url=='logout'){
   this.authenService.logout() ;
   this.router.navigateByUrl('/login') ;


    }else{
      this.router.navigateByUrl(m.url) ;

    }
    

  }

}
