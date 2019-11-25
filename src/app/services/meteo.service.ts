import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient:HttpClient) { }

  getMeteoData(city:string){
    return   this.httpClient.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=2eea7055ae29bbb32e48bb20a493f51e")
     
  }
}
