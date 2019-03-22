import { Component, OnInit, Input} from '@angular/core';
import {City} from "../shared/models/city.model";

@Component({
  selector: 'app-city-thumbnail',
  templateUrl: './city-thumbnail.component.html',
  styleUrls: ['./city-thumbnail.component.sass']
})
// component needs to take city as an input
export class CityThumbnailComponent implements OnInit {

  @Input() city: City;

  ngOnInit() {
  }

}
