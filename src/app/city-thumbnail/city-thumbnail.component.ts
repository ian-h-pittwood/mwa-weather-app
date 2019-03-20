import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-city-thumbnail',
  templateUrl: './city-thumbnail.component.html',
  styleUrls: ['./city-thumbnail.component.sass']
})
// component needs to take city as an input
export class CityThumbnailComponent implements OnInit {

  @Input() city: any

  ngOnInit() {
  }

}
 