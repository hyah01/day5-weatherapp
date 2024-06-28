import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weatherapi.service';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrl: './hourly-forecast.component.css'
})
export class HourlyForecastComponent implements OnInit{
  weatherData: any;
  hourlyData: any;

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
      this.weatherService.weatherData.subscribe(data => {
        if (data){
          this.weatherData = data;
          this.hourlyData = this.weatherData.timelines.hourly.slice(0,24);
        }
      })
  }

  getFormattedTime(hourData: any){
    if (hourData){
      const hours = (parseInt(hourData.time.slice(11,13)) + 16) % 12 + 1;
      const period = (parseInt(hourData.time.slice(11, 13)) + 16) % 23 + 1 <= 12 ? 'AM' : 'PM';
    return `${hours.toString()} ${period}`; 
    }
    return '';
  }

  getTemperature(hourData: any){
    if (hourData){
      return Math.round(hourData.values.temperatureApparent)
    }
    return ''
  }

  getHumidity(hourData: any){
    if (hourData){
      return hourData.values.humidity;
    }
    return ''
  }

  getWindSpeed(hourData: any){
    if (hourData){
      return hourData.values.windSpeed;
    }
    return ''
  }



}
