import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {City} from './city.model';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private _http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this._http.get<City[]>(environment.backEndUrl + 'cities')
      .pipe(
        tap(cities => {
          // debugger;
        }),
        map( cities => {
          return cities;
          //return [{name: "snurfi town", zipCode: 28923842388398348932}]
        })
      );
  }

  getCityById(id: number): Observable<City> {
    return this._http.get<City>('https://localhost:5001/api/customers/' + id)
  }
}
