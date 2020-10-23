import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CityListComponent} from './cities/city-list/city-list.component';
import {CityDetailComponent} from './cities/city-detail/city-detail.component';

const routes: Routes = [
  {path: 'cities', component: CityListComponent},
  {path: 'city-details', component: CityDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
