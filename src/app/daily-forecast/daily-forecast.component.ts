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
  weatherCode: any;

  constructor(private weatherService: WeatherService){}

  // Load Data when data is updated
  ngOnInit(): void {
      this.weatherService.weatherData.subscribe(data => {
        if (data){
          this.weatherData = data;
          this.dailyData = this.weatherData.timelines.daily;
          this.weatherService.fetchWeatherCodes().subscribe(data => {
            if (data){
              this.weatherCode = data;
            }
          })
        }
      })
  }

  // get current date
  getDate(dayData: any){
    if (dayData){
      const day = dayData.time.slice(5,10).replace("-","/");
    return `${day}`; 
    }
    return '';
  }

  // get the day of the week
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

  // get temperature
  getTemperature(dayData: any){
    return Math.round(dayData.values.temperatureAvg)
  }

  // get the weather condition
  getWeather(dayData: any){
    if (dayData && this.weatherCode){
      return this.weatherCode.weatherCode[dayData.values.weatherCodeMax];
    } 
    return '';
  }



}
