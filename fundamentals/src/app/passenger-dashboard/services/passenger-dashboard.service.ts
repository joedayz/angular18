import {Passenger} from "../models/passenger.interface";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const PASSENGER_API: string = 'http://localhost:3000/passengers';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root',
})
export class PassengerDashboardService {

  constructor(private httpClient: HttpClient) {
  }

  getPassengers(): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(PASSENGER_API);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient.put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, httpOptions);
  }

  removePassenger(passenger: Passenger): Observable<any> {
    return this.httpClient.delete<Passenger>(`${PASSENGER_API}/${passenger.id}`, httpOptions);
  }

  getPassenger(id: number): Observable<Passenger> {

    return this.httpClient.get<Passenger>(`${PASSENGER_API}/${id}`);
  }
}
