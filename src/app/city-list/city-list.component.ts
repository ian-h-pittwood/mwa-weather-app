import {Component, OnInit} from '@angular/core';
import {CityListService} from './Shared/city-list-service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.sass']
})

export class CityListComponent implements OnInit {
  cityDataList: any;

  constructor(private cityListService: CityListService) {

  }

  ngOnInit() {
    this.cityDataList = this.cityListService.getCityData();

    console.log("Return from service", this.cityDataList);
  }

}
