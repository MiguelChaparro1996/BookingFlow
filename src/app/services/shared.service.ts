import { Injectable } from '@angular/core';
import {AirAvailability} from '../shared/models/airAvailability.model';
import {Subject,Observable} from 'rxjs';
@Injectable()
export class SharedService {
  private subject = new Subject<AirAvailability>();

  getData(): Observable<AirAvailability> {
    return this.subject.asObservable();
  }
  sendData(airAvailability: AirAvailability) {
    console.log("sendData -");
    console.log(airAvailability);
   this.subject.next(airAvailability);
 }
}
