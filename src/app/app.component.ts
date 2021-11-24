import { Component } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cityName: string = "";
  weatherData:any;

  constructor(private _getWeatherData: WeatherService) { }

  searchCity() {
    this._getWeatherData.getWeatherData(this.cityName).subscribe(
      data => {this.weatherData = JSON.stringify(data); console.log(data)},
      error => console.log("Fetch Error", error)
    )
  }
}
