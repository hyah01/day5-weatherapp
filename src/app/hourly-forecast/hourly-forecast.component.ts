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
  weatherCode: any;

  constructor(private weatherService: WeatherService){}

  // Load Data when data is updated
  ngOnInit(): void {
      this.weatherService.weatherData.subscribe(data => {
        if (data){
          this.weatherData = data;
          this.hourlyData = this.weatherData.timelines.hourly.slice(0,24);
          this.weatherService.fetchWeatherCodes().subscribe(data => {
            if (data){
              this.weatherCode = data;
            }
          })
        }
      })
  }

  // format Time and period of time based on current time
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

  getWeather(hourData: any){
    if (hourData && this.weatherCode){
      return this.weatherCode.weatherCode[hourData.values.weatherCode];
    } 
    return '';
  }

  // load image src based on weather code
  getImageURL(code: any){
    let images: { [key: string]: string } = {
      "Sunny": "./assets/WeatherIcon/1000_Clear_Sunny.png",
      "Mostly Clear": "./assets/WeatherIcon/1100_Mostly_Clear.png",
      "Partly Cloudy": "./assets/WeatherIcon/1101_Partly_Cloudy.png",
      "Mostly Cloudy": "./assets/WeatherIcon/1102_Mostly_Cloudy.png",
      "Cloudy": "./assets/WeatherIcon/1001_Cloudy.png",
      "Fog": "./assets/WeatherIcon/2000_Fog.png",
      "Light Fog": "./assets/WeatherIcon/2100_Fog_Light.png",
      "Drizzle": "./assets/WeatherIcon/4000_Drizzle.png",
      "Rain": "./assets/WeatherIcon/4001_Rain.png",
      "Light Rain": "./assets/WeatherIcon/4200_Rain_Light.png",
      "Heavy Rain": "./assets/WeatherIcon/4201_Rain_Heavy.png",
      "Snow": "./assets/WeatherIcon/5000_Snow.png",
      "Flurries": "./assets/WeatherIcon/5001_Flurries.png",
      "Light Snow": "./assets/WeatherIcon/5100_Snow_Light.png",
      "Heavy Snow": "./assets/WeatherIcon/5101_Snow_Heavy.png",
      "Freezing Drizzle": "./assets/WeatherIcon/6000_Freezing_Rain_Drizzle.png",
      "Freezing Rain": "./assets/WeatherIcon/6001_Freezing_Rain.png",
      "Light Freezing Rain": "./assets/WeatherIcon/6200_Freezing_Rain_Light.png",
      "Heavy Freezing Rain": "./assets/WeatherIcon/6201_Freezing_Rain_Heavy.png",
      "Ice Pellets": "./assets/WeatherIcon/7000_Ice_Pellets.png",
      "Heavy Ice Pellets": "./assets/WeatherIcon/7101_Ice_Pellets_Heavy.png",
      "Light Ice Pellets": "./assets/WeatherIcon/7102_Ice_Pellets_Light.png",
      "Thunderstorm": "./assets/WeatherIcon/8000_Lightning_Storm.png"
    };

    return images[code];

  }



}
