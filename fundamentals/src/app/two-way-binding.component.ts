import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `
    <div class="app">
        <button (click)="handleClick()">Cambiar Nombre</button>
        <input type="text"
               [ngModel]="name"
               (ngModelChange)="handleChange($event)">

      <input type="text"
             [(ngModel)]="name"
             >

      <div>{{name}}</div>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class TwoWayBindingComponent {
  title = 'fundamentals';
  name: string = 'Joe';
  constructor(){
    this.title = 'Angular en JoeDayz';
  }

  handleChange(value: string) {
    this.name = value;
  }

  handleClick() {
    this.name = "Diaz";
  }
}
