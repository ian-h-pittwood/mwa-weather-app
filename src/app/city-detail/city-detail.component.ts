import {Component, Input, OnInit} from '@angular/core';
import {CityDataService} from "../shared/services/city-data.service";
import {ActivatedRoute} from "@angular/router";
import {City} from "../shared/models/city.model";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.sass']
})
export class CityDetailComponent implements OnInit {
  private id: number;
  private paramSub: Subscription;
  private cityDataSub: Subscription;
  city: City;

  constructor(private cityListService: CityDataService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.paramSub = this.route.params.subscribe(params => {
      this.id = +params['id']
    });
    this.cityDataSub = this.cityListService.getCityDataById(this.id).subscribe((city: City) => {
      this.city = city
    })

  }

  ngOnDestroy() {
    this.cityDataSub.unsubscribe();
    this.paramSub.unsubscribe();
  }
}
