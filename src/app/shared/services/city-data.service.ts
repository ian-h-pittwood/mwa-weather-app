import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {City, CityAdapter} from "../models/city.model";
import {CityForecast, CityForecastAdapter} from "../models/city-forecast.model";

@Injectable()
export class CityDataService {

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }

  getCityDataByName(name: string, country: string = '', units: string = 'imperial'): Observable<City[]> {
    let url: string;
    if (country !== '') {
      url = `${environment.api_address}/weather?q=${name},${country}&units=${units}&APPID=${environment.api_key}`
    } else {
      url = `${environment.api_address}/weather?q=${name}&units=${units}&APPID=${environment.api_key}`
    }
    return this.http.get(url)
      .pipe(catchError(this.handleError('getCityDataByName', [])),
        map((data: any[]) => data.map(item => new CityAdapter().adapt(item))))
  }

  getCityDataById(id: number, units: string = 'imperial'): Observable<City> {
    let url = `${environment.api_address}/weather?id=${id}&units=${units}&APPID=${environment.api_key}`;
    return this.http.get(url)
      .pipe(catchError(this.handleError('getCityDataById', [])),
        map(item => new CityAdapter().adapt(item)))
  }

  getCityForecastByName(name: string, country: string = '', units: string = 'imperial'): Observable<CityForecast[]> {
    let url: string;
    if (country !== '') {
      url = `${environment.api_address}/forecast?q=${name},${country}&units=${units}&APPID=${environment.api_key}`

    } else {
      url = `${environment.api_address}/forecast?q=${name}&units=${units}&APPID=${environment.api_key}`
    }
    return this.http.get(url)
      .pipe(catchError(this.handleError('getCityForecastByName', [])),
        map((data: any[]) => data.map(item => new CityForecastAdapter().adapt(item))))
  }

  getCityForecastById(id: number, units: string = 'imperial'): Observable<CityForecast> {
    let url = `${environment.api_address}/forecast?id=${id}&units=${units}&APPID=${environment.api_key}`;
    return this.http.get(url)
      .pipe(catchError(this.handleError('getCityForecastById', [])),
        map(item => new CityForecastAdapter().adapt(item)))
  }

  getCitiesInArea(lat: number, lon: number, count: number, units: string = 'imperial'): Observable<City[]> {
    let url = `${environment.api_address}/find?lat=${lat}&lon=${lon}&cnt=${count}&units=${units}&APPID=${environment.api_key}`;
    return this.http.get(url)
      .pipe(catchError(this.handleError('getCitiesInArea', [])),
        map((data: any) => data.list.map(item => new CityAdapter().adapt(item))))
  }
}
