import {Component, OnInit} from '@angular/core';
import {CityDataService} from '../shared/city-data.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.sass']
})

export class CityListComponent implements OnInit {
  cityDataList: any;
  defaultLat: number = 41.8818;
  defaultLon: number = -87.6231;

  constructor(private cityListService: CityDataService) {

  }

  apiCall(lat: number = this.defaultLat, lon: number = this.defaultLon) {
    this.cityListService.getCitiesInArea(lat, lon, 12).subscribe(
      (cityDataList: any) => {
        this.cityDataList = cityDataList
      }
    );
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.apiCall(latitude, longitude)
      });
    } else {
      console.log("No support for geolocation");
      this.apiCall()
    }
  }

  ngOnInit() {
    this.getLocation()
  }

}
