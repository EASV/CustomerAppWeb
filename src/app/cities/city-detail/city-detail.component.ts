import { Component, OnInit } from '@angular/core';
import {CityService} from '../shared/city.service';
import {Observable} from 'rxjs';
import {City} from '../shared/city.model';

@Component({
  selector: 'innotech-app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {
  city$: Observable<City>;

  constructor(private service: CityService) { }

  ngOnInit(): void {
    this.city$ = this.service.getCityById(1);
  }

}
