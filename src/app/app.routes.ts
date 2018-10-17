import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AirAvailabilityComponent } from './components/air-availability/air-availability.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
{ path: 'airAvailability/:origin/:destination/:departure_date/:return_date/:adults/:children', component: AirAvailabilityComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
