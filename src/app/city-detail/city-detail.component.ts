import {Component, Input, OnInit} from '@angular/core';
import {CityDataService} from "../shared/services/city-data.service";
import {ActivatedRoute} from "@angular/router";
import {City} from "../shared/models/city.model";
import {Observable, Subscription} from "rxjs";
import {CityFavoriteStorageService} from "../shared/services/city-favorite-storage.service";
import {CityForecast} from "../shared/models/city-forecast.model";

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.sass']
})
export class CityDetailComponent implements OnInit {
  private id: number;
  private paramSub: Subscription;
  private cityDataSub: Subscription;
  private cityForecastSub: Subscription;
  city: City;
  forecast: CityForecast;
  isFavorite: boolean;

  constructor(private cityListService: CityDataService, private cityFavoriteService: CityFavoriteStorageService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.paramSub = this.route.params.subscribe(params => {
      this.id = +params['id']
    });
    this.cityDataSub = this.cityListService.getCityDataById(this.id).subscribe((city: City) => {
      this.city = city;
      this.isFavorite = this.cityFavoriteService.isFavorite(this.city.id)
    });
    this.cityForecastSub = this.cityListService.getCityForecastById(this.id).subscribe((cityForecast: CityForecast) => {
      console.log(cityForecast);
      this.forecast = cityForecast;
    });
  }

  callAddFavorite() {
    this.cityFavoriteService.addFavorite(this.city.id);
    this.isFavorite = this.cityFavoriteService.isFavorite(this.city.id);
  }

  callRemoveFavorite() {
    this.cityFavoriteService.removeFavorite(this.city.id);
    this.isFavorite = this.cityFavoriteService.isFavorite(this.city.id);
  }

  ngOnDestroy() {
    this.cityDataSub.unsubscribe();
    this.paramSub.unsubscribe();
  }
}
