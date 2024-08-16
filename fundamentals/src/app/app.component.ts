import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import {
  PassengerDashboardComponent
} from "./passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PassengerDashboardComponent],
  template: `
    <div class="app">

      <passenger-dashboard></passenger-dashboard>

    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
