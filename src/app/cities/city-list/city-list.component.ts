import { Component, OnInit } from '@angular/core';
import {CityService} from '../shared/city.service';
import {City} from '../shared/city.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'innotech-app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  cities$: Observable<City[]>;
  constructor(private _cityService: CityService) {
  }

  ngOnInit(): void {
    this.cities$ = this._cityService.getCities();
  }

}
