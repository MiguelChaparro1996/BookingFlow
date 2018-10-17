import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import {DatePipe} from '@angular/common';
//Services
import {IataService} from '../../services/iata.service';
import {SharedService} from '../../services/shared.service';
//Models
import {AirAvailability} from '../../shared/models/airAvailability.model';
//Routes
import { Router } from '@angular/router';
@Component({
  selector: 'app-quicksearch',
  templateUrl: './quicksearch.component.html',
  styleUrls: ['./quicksearch.component.css']
})
export class QuicksearchComponent implements OnInit {
  public model:AirAvailability;
  filteredCountriesSingle: any[];
  msgs: Message[] = [];
  adults:any[];
  children:any[];
  constructor(private _iataService:IataService,private router: Router,private datePipe:DatePipe,private _messageService:MessageService) {
    this.adults=[
      {"label":"1","value":1},
      {"label":"2","value":2},
      {"label":"3","value":3},
      {"label":"4","value":4},
      {"label":"5","value":5},
      {"label":"6","value":6},
      {"label":"7","value":7}
    ]
    this.children=[
      {"label":"1","value":1},
      {"label":"2","value":2},
      {"label":"3","value":3},
      {"label":"4","value":4},
      {"label":"5","value":5},
      {"label":"6","value":6}
    ]
  }
  ngOnInit() {
    this.model=new AirAvailability();
    let value=JSON.parse(localStorage.getItem("airAvailability"));
    if (value) {
      value.rangeDates[0]=new Date(value.rangeDates[0]);
      value.rangeDates[1]=new Date(value.rangeDates[1]);
      this.model=value;
    }
  }
  onSubmit() {

    this.msgs = [];
    if (!this.model.origin) {
      this.msgs.push({severity:'warn', summary:'Validación de campos', detail:'Elija un origen'});
    }
    if (!this.model.destination) {
      this.msgs.push({severity:'warn', summary:'Validación de campos', detail:'Elija un destino'});
    }
    if (!this.model.rangeDates) {
      this.msgs.push({severity:'warn', summary:'Validación de campos', detail:'Elija las fechas de viaje'});
    }else{
      if (!this.model.rangeDates[1]) {
        this.msgs.push({severity:'warn', summary:'Validación de campos', detail:'Elija la fecha de regreso'});
      }
    }
    if (!this.model.adults) {
      this.msgs.push({severity:'warn', summary:'Validación de campos', detail:'Elija la cantidad de adultos'});
    }
    if (this.model.children==null) {
      this.model.children={"label":0,"value":0};
    }
    if (this.msgs.length==0) {
      localStorage.setItem('airAvailability',JSON.stringify(this.model));
      this.router.navigate(['/airAvailability',this.model.origin.value,this.model.destination.value,this.datePipe.transform(this.model.rangeDates[0],'yyyy-MM-dd'),this.datePipe.transform(this.model.rangeDates[1],'yyyy-MM-dd'),this.model.adults.value,this.model.children.value]);
    }
  }
  minDate(){
    return new Date();
  }
  filterCountrySingle(event) {
    let query = event.query;
    this._iataService.getCountries(query).then(iatas => {
      this.filteredCountriesSingle = iatas;
    });
  }
}
