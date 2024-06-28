import { Component } from '@angular/core';
import { WeatherService } from '../weatherapi.service';

@Component({
  selector: 'app-weather-control',
  templateUrl: './weather-control.component.html',
  styleUrl: './weather-control.component.css'
})
export class WeatherControlComponent {
  location: string = '';
  
  constructor(private weatherService: WeatherService){}

  fetchWeather(){
    if (this.location != ''){
      this.weatherService.fetchWeatherData(this.location);
      //this.weatherService.fetchTestData();
    }
  }
}
