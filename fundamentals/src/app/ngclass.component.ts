import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null
}

@Component({
  selector: 'app-ngclass',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class="app">

      <h3>Peru Passengers</h3>

      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>

      <h3>Airline Passengers</h3>

      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [ngClass]="{
                'checked-in'  : passenger.checkedIn,
                'checked-out'  : !passenger.checkedIn
          }"></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>


    </div>
  `,
  styleUrl: './app.component.scss'
})
export class NgClassComponent {

  passengers: Passenger[] = [{
    id:1,
    fullname: 'Joe',
    checkedIn: true,
    checkInDate: 1490742000000
  },{
    id:2,
    fullname: 'Miryan',
    checkedIn: false,
    checkInDate: null
  },{
    id:3,
    fullname: 'Deborah',
    checkedIn: true,
    checkInDate: 1491606000000
  },{
    id:4,
    fullname: 'Maria',
    checkedIn: false,
    checkInDate: null
  }
  ]
}
