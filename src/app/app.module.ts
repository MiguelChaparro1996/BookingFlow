//General
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//Routes
import {APP_ROUTING} from './app.routes';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { QuicksearchComponent } from './components/quicksearch/quicksearch.component';
import { BannerComponent } from './components/banner/banner.component';
import { AirAvailabilityComponent } from './components/air-availability/air-availability.component';
//Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {GrowlModule} from 'primeng/growl';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import {DatePipe} from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
//Services
import { AirAvailabilityService } from './services/airAvailability.service';
import { IataService } from './services/iata.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {SharedService} from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BannerComponent,
    QuicksearchComponent,
    AirAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    CalendarModule,
    AutoCompleteModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    DropdownModule,
    GrowlModule
  ],
  providers: [
    AirAvailabilityService,
    IataService,
    DatePipe,
    MessageService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
