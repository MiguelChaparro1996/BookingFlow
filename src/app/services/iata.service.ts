import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class IataService {
  constructor(private http: HttpClient) {  }
  getCountries(filter: string) {
    const apikey = environment.apikey;
    const endPoint = environment.endPointAirports + `/autocomplete`;
    let params: any = {'term': filter,'apikey':apikey};
    return this.http.get<any>(endPoint,{params:params})
    .toPromise()
    .then(res => <any[]>res)
    .then(data => { return data; });
  }
}
