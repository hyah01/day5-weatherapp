import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './weatherapi.service';
import { FormsModule } from '@angular/forms';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';
import { MainForcastComponent } from './main-forcast/main-forcast.component';
import { WeatherControlComponent } from './weather-control/weather-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HourlyForecastComponent,
    DailyForecastComponent,
    MainForcastComponent,
    WeatherControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    WeatherService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
