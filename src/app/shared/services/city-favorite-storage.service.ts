import {Injectable} from "@angular/core";
import {City} from "../models/city.model";
import {CityDataService} from "./city-data.service";
import {EMPTY, Observable} from "rxjs";

@Injectable()
export class CityFavoriteStorageService {
  constructor(private cityDataService: CityDataService) {
  }

  addFavorite(cityId: number): void {
    if (localStorage.getItem('favoriteCities') === null) {
      localStorage.setItem('favoriteCities', JSON.stringify([cityId]))
    } else {
      let array = JSON.parse(localStorage.getItem('favoriteCities'));
      let index = array.indexOf(cityId);
      if (index === -1) {
        array.push(cityId);
        localStorage.setItem('favoriteCities', JSON.stringify(array));
      }
    }
  }

  removeFavorite(cityId: number): void {
    console.log('Remove favorite called');
    let array = JSON.parse(localStorage.getItem('favoriteCities'));
    console.log(array);
    let index = array.indexOf(cityId);
    if (index > -1) {
      array.splice(index, 1);
    }
    console.log(array);
    localStorage.setItem('favoriteCities', JSON.stringify(array))
  }

  isFavorite(cityId: number): boolean {
    if (localStorage.getItem('favoriteCities') !== null) {
      let array = JSON.parse(localStorage.getItem('favoriteCities'));
      for (let i in array) {
        if (cityId === Number(array[i])) {
          return true
        }
      }
    }
    return false
  }

  hasFavoritesSaved(): boolean {
    if (localStorage.getItem('favoriteCities') === null) {
      return false
    } else if (!(localStorage.getItem('favoriteCities').length > 2)) {
      return false
    }
    return true
  }

  getFavoriteCities(): Observable<City[]> {
    if (localStorage.getItem('favoriteCities') !== null && localStorage.getItem('favoriteCities').length > 0) {
      let array = JSON.parse(localStorage.getItem('favoriteCities'));
      let ids_as_string: string;
      if (array.length > 1) {
        ids_as_string = array.join(',');
      } else {
        ids_as_string = '' + array[0];
      }

      return this.cityDataService.getCitiesById(ids_as_string)
    } else {
      return EMPTY
    }

  }
}
