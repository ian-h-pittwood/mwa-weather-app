import {Component, OnInit} from '@angular/core';
import { CityListService } from './Shared/city-list-service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.sass']
})

export class CityListComponent implements OnInit {
  // TODO: This is a placeholder for the 5 city hard coded data (later on it will be replaced by the service)
  citynames : any []
  constructor ( private cityListService: CityListService){

  }

  ngOnInit(){
    console.log("Return from service", this.cityListService.getCityData())

    this.citynames = this.cityListService.getCityData().list


  }

}
