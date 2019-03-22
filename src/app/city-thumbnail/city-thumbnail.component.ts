import { Component, OnInit, Input} from '@angular/core';
import {City} from "../shared/models/city.model";
import {CityFavoriteStorageService} from "../shared/services/city-favorite-storage.service";

@Component({
  selector: 'app-city-thumbnail',
  templateUrl: './city-thumbnail.component.html',
  styleUrls: ['./city-thumbnail.component.sass']
})
// component needs to take city as an input
export class CityThumbnailComponent implements OnInit {

  @Input() city: City;
  isFavorite: boolean;

  constructor(private cityFavoriteService: CityFavoriteStorageService) {
  }

  ngOnInit() {
    this.isFavorite = this.cityFavoriteService.isFavorite(this.city.id)
  }

  callAddFavorite() {
    this.cityFavoriteService.addFavorite(this.city.id);
    this.isFavorite = this.cityFavoriteService.isFavorite(this.city.id);
  }

  callRemoveFavorite() {
    this.cityFavoriteService.removeFavorite(this.city.id);
    this.isFavorite = this.cityFavoriteService.isFavorite(this.city.id);
  }

}
