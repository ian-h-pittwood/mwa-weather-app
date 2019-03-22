import {Component, OnInit} from '@angular/core';
import {City} from "../shared/models/city.model";
import {CityFavoriteStorageService} from "../shared/services/city-favorite-storage.service";
import {isObject} from "util";

@Component({
  selector: 'app-favorite-cities',
  templateUrl: './favorite-cities.component.html',
  styleUrls: ['./favorite-cities.component.sass']
})
export class FavoriteCitiesComponent implements OnInit {
  cityDataList: City[];
  hasFavorites: boolean;

  constructor(private cityFavoriteService: CityFavoriteStorageService) {
  }

  apiCall() {

    this.hasFavorites = this.cityFavoriteService.hasFavoritesSaved();
    if (this.hasFavorites) {
      this.cityFavoriteService.getFavoriteCities().subscribe(
        (cityDataList) => {
          this.cityDataList = cityDataList;
        }
      );
    } else {
      this.cityDataList = []
    }
  }

  ngOnInit() {
    this.apiCall()
  }

}
