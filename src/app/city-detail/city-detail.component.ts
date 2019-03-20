import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.sass']
})
export class CityDetailComponent implements OnInit {
  // TODO: This is a placeholder for the 5 city hard coded data (later on it will be replaced by the service)
  @Input() id: number;

  ngOnInit() {
  }

}
