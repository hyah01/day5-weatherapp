import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "./environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class WeatherService{
    private weatherDataSubject = new BehaviorSubject<any>(null);
    weatherData = this.weatherDataSubject.asObservable();
    weatherCode: any;
    private apiUrl = '';

    constructor(private http: HttpClient){}

    fetchWeatherData(location: string) {
        this.apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&timesteps=1h%2C1d&units=imperial&apikey=${environment.apiKey}`;
        this.http.get<any>(this.apiUrl).subscribe(data => {
            this.weatherDataSubject.next(data)
        })
    }

    fetchTestData(){
        this.http.get<any>('app/weatherTest.json').subscribe(data => {
            this.weatherDataSubject.next(data)
        })
    }

    fetchWeatherCodes(): Observable<any> {
        return this.http.get<any>('app/assets/WeatherCode/WeatherCode.json');
      }
    

}