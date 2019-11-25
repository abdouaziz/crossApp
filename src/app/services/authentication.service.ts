import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 public authenticated:boolean ;
  public token :string ;

  constructor() { }

  public login(username:string , password:string){
    if(username=='admin' &&password=='1234'){
      this.authenticated=true ;
      this.saveToken() ;
    }
    else{
      this.authenticated=false ;
    }
    return this.authenticated ;



  }

   private saveToken(){

    let token="azerty" ;
    localStorage.setItem("myToken",token) ;

  }

  public loadToken(){

    this.token=localStorage.getItem("myToken") ;
    if(this.token=="azerty"){
      this.authenticated=true ;
     
    }
    else {
      this.authenticated=false ;
    }
     
    return this.authenticated ;
  }

  public logout(){
    localStorage.removeItem("myToken" ) ;

  }
}
