import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AirAvailabilityService {
  constructor(private http:HttpClient) {  }

  getAvailabilty(origin:string,destination:string,departureDate:string,returnDate:string,adults:number,children:number){
    const apikey = environment.apikey;
    const endPoint = environment.endPointFlights + `/low-fare-search`;
    const numberResults = environment.numberResults;
    let param: any = {'origin': origin,'destination':destination,'departure_date':departureDate,'return_date':returnDate,'number_of_results':numberResults,'apikey':apikey,'adults':adults,'children':children};
    return this.http.get(endPoint,{params:param});
  }
}
