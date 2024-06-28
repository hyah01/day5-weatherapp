import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherControlComponent } from './weather-control.component';

describe('WeatherControlComponent', () => {
  let component: WeatherControlComponent;
  let fixture: ComponentFixture<WeatherControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
