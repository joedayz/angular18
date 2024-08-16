import {Component, OnInit} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";
import {DatePipe, NgForOf, UpperCasePipe} from "@angular/common";
import {PassengerCountComponent} from "../../components/passenger-count/passenger-count.component";
import {PassengerDetailComponent} from "../../components/passenger-detail/passenger-detail.component";


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
  constructor() {
    //para la inyeccion de dependencias
  }

  ngOnInit(): void {
    //Traer datos de un servicio REST o configurar valores iniciales
    this.passengers = [{
      id:1,
      fullname: 'Joe',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [ { name: 'Elias', age: 12}, { name: 'Deborah', age: 7}]
    },{
      id:2,
      fullname: 'Miryan',
      checkedIn: false,
      checkInDate: null,
      children: null
    },{
      id:3,
      fullname: 'Deborah',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: [ { name: 'Felipe', age: 11}]
    },{
      id:4,
      fullname: 'Maria',
      checkedIn: false,
      checkInDate: null,
      children: null
    }
    ];

  }

  handleEdit(event: Passenger) {
    console.log(event);
  }

  handleRemove(event: Passenger) {
    console.log(event)
  }
}
