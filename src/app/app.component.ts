import { Component } from '@angular/core';
import { WeatherService } from './weatherapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day5-weatherapp';
  location: string = '';
  
  constructor(private weatherService: WeatherService){}

  fetchWeather(){
    if (this.location != ''){
      //this.weatherService.fetchWeatherData(this.location);
      this.weatherService.fetchTestData();
    }
  }
}
