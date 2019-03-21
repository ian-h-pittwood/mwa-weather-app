import {Component, Input, OnInit} from '@angular/core';
import {CityDataService} from "../shared/city-data-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.sass']
})
export class CityDetailComponent implements OnInit {
  // TODO: This is a placeholder for the 5 city hard coded data (later on it will be replaced by the service)
  id: number;
  private sub: any;
  city: any;
  cityDataList: any;

  constructor(private cityListService: CityDataService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']
    });
    this.cityDataList = this.cityListService.getCityDataById();
    for (let item of this.cityDataList.list) {
      console.log(item);
      console.log(this.id);
      console.log(item.id);
      if (item.id === this.id) {
        console.log("match found");
        this.city = item;
      }
    }

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
