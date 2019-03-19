import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.sass']
})
export class CityDetailComponent implements OnInit {
  // TODO: This is a placeholder for the 5 city hard coded data (later on it will be replaced by the service)
  cityData = {
    list: [
      {
        coord: {lon: -0.13, lat: 51.51},
        weather: [{id: 300, main: 'Drizzle', description: 'light intensity drizzle', icon: '09d'}],
        base: 'stations',
        main: {temp: 7.17, pressure: 1012, humidity: 81, temp_min: 6, temp_max: 8},
        visibility: 10000,
        wind: {speed: 4.1, deg: 80},
        clouds: {all: 90},
        dt: 1485789600,
        sys: {type: 1, id: 5091, message: 0.0103, country: 'GB', sunrise: 1485762037, sunset: 1485794875},
        id: 2643743,
        name: 'London',
        cod: 200
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
