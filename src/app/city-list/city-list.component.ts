import {Component, OnInit} from '@angular/core';
import {CityDataService} from '../shared/city-data-service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.sass']
})

export class CityListComponent implements OnInit {
  cityDataList: any;

  constructor(private cityListService: CityDataService) {

  }

  ngOnInit() {
    this.cityDataList = this.cityListService.getCityDataById();

    console.log("Return from service", this.cityDataList);
  }

}
