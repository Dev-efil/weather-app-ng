import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  _apiKey = "8602040652573b9bb700863b97a718c7";

  constructor(private _http: HttpClient) { }
  
  getWeatherData(city : string) {
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this._apiKey}`);
  }
}
