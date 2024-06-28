import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weatherapi.service';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.css'
})
export class DailyForecastComponent implements OnInit{
  weatherData: any;
  dailyData: any;

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
      this.weatherService.weatherData.subscribe(data => {
        if (data){
          this.weatherData = data;
          this.dailyData = this.weatherData.timelines.daily;
        }
      })
  }

  getDate(dayData: any){
    if (dayData){
      const day = dayData.time.slice(5,10).replace("-","/");
    return `${day}`; 
    }
    return '';
  }

  getDay(dayData: any){
    if (dayData){
      const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
      const day = new Date(dayData.time);
      return daysOfWeek[day.getDay()];
    }
    return '';
  }

  getTemperature(dayData: any){
    return Math.round(dayData.values.temperatureAvg)
  }

  getWeatherCode(dayData: any){
    return dayData.values.weatherCodeMax;
  }

}
