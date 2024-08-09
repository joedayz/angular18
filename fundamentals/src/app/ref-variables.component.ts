import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-ref-variables',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `
    <div class="app">
        <button (click)="handleClick(username.value)">Cambiar Nombre</button>
        <input type="text" #username>
      <div>{{name}}</div>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class RefVariablesComponent {
  title = 'fundamentals';
  name: string = 'Joe';
  constructor(){
    this.title = 'Angular en JoeDayz';
  }

  handleClick(value: string) {
    this.name = value;
  }
}
