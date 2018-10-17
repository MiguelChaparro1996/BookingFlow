import { Component, OnInit } from '@angular/core';
import { AirAvailabilityService } from '../../services/airAvailability.service';
//Models
import {AirAvailability} from '../../shared/models/airAvailability.model';
//Routes
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-air-availability',
  templateUrl: './air-availability.component.html',
  styleUrls: ['./air-availability.component.css']
})
export class AirAvailabilityComponent implements OnInit {
  availability:any;
  searchComplete:boolean;
  constructor(private activatedRoute:ActivatedRoute, private _airAvailabilityService:AirAvailabilityService) {
    this.activatedRoute.params.subscribe(params=>{
      this.searchComplete=false;
      this._airAvailabilityService.getAvailabilty(params.origin,params.destination,params.departure_date,params.return_date,params.adults,params.children).subscribe(
        data=>{
          this.availability=data;
          this.searchComplete=true;
        },
        err => {
          this.searchComplete=true;
        },
        () =>{}
      )
    })
  }
  ngOnInit() {

  }

}
