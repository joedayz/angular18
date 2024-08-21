import {Passenger} from "./passenger.interface";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root',
})
export class PassengerDashboardService {

  getPassengers(): Passenger[] {

    return [{
      id: 1,
      fullname: 'Joe',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{name: 'Elias', age: 12}, {name: 'Deborah', age: 7}]
    }, {
      id: 2,
      fullname: 'Miryan',
      checkedIn: false,
      checkInDate: null,
      children: null
    }, {
      id: 3,
      fullname: 'Deborah',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: [{name: 'Felipe', age: 11}]
    }, {
      id: 4,
      fullname: 'Maria',
      checkedIn: false,
      checkInDate: null,
      children: null
    }
    ];
  }

}
