import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class="app">

      <h3>Peru Passengers</h3>

      <ul>
      <ng-container *ngFor="let passenger of passengers; let i = index">
        <li>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ng-container>
      </ul>

      <h3>Peru Passengers</h3>

      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>


    </div>
  `,
  styleUrl: './app.component.scss'
})
export class NgForComponent {

  passengers: Passenger[] = [{
    id:1,
    fullname: 'Joe',
    checkedIn: true
  },{
    id:2,
    fullname: 'Miryan',
    checkedIn: false
  },{
    id:3,
    fullname: 'Deborah',
    checkedIn: true
  },{
    id:4,
    fullname: 'Maria',
    checkedIn: true
  }
  ]
}
