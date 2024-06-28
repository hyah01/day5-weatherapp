import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weatherapi.service';

@Component({
  selector: 'app-main-forcast',
  templateUrl: './main-forcast.component.html',
  styleUrl: './main-forcast.component.css'
})
export class MainForcastComponent implements OnInit{
  weatherData: any;
  dataName: any;
  currTemp: any;
  curWeatherCode: any;
  weatherCode: any;

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
      this.weatherService.weatherData.subscribe(data => {
        if (data){
          this.weatherData = data;
          this.dataName = this.weatherData.location.name.split(",")[0];
          this.currTemp = Math.round(this.weatherData.timelines.hourly.slice(0,1)[0].values.temperatureApparent);
          this.curWeatherCode = this.weatherData.timelines.hourly.slice(0,1)[0].values.weatherCode;
          this.weatherService.fetchWeatherCodes().subscribe(data => {
            if (data){
              this.weatherCode = data;
            }
          })
        }
      })
  }

  getWeather(){
    if (this.weatherCode){
      return this.weatherCode.weatherCode[this.curWeatherCode];
    } 
    return '';
  }

}
