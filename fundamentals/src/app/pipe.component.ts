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
  selector: 'app-pipe',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class="app">

      <h3>Peru Passengers</h3>

      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}

          <p>{{ passenger | json }}</p>

          <div class="date">
            Check in date:
            {{ passenger.checkInDate ? ( passenger.checkInDate | date: 'yMMMd' | uppercase ) : 'Not checked in' }}
          </div>

        </li>
      </ul>






    </div>
  `,
  styleUrl: './app.component.scss'
})
export class PipeComponent {

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
