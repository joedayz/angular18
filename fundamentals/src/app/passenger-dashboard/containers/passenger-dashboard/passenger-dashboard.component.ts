import {Component, OnInit} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";
import {DatePipe, NgForOf, UpperCasePipe} from "@angular/common";
import {PassengerCountComponent} from "../../components/passenger-count/passenger-count.component";
import {PassengerDetailComponent} from "../../components/passenger-detail/passenger-detail.component";
import {PassengerDashboardService} from "../../models/passenger-dashboard.service";


@Component({
  selector: 'passenger-dashboard',
  styleUrl: './passenger-dashboard.component.scss',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    NgForOf,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  template: `

    <div>

      <passenger-count [items]="passengers"></passenger-count>
      <passenger-detail *ngFor="let passenger of passengers;" [detail]="passenger"
                        (edit)="handleEdit($event)" (remove)="handleRemove($event)"></passenger-detail>

    </div>
  `
})
export class PassengerDashboardComponent implements  OnInit{

  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerDashboardService) {
  }

  ngOnInit(): void {
    this.passengers = this.passengerService.getPassengers();
  }

  handleEdit(event: Passenger) {
   this.passengers = this.passengers.map( (passenger : Passenger )  => {
      if(passenger.id == event.id){
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
   });
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter( (passenger : Passenger )  => {
      return passenger.id != event.id;
    });
  }
}
