import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app">
        <button (click)="handleClick()">Cambiar Nombre</button>
        <input type="text"
               [value]="name"
               (input)="handleInput($event)"
               (blur)="handleBlur($event)">
      <div>{{name}}</div>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class EventBindingComponent {
  title = 'fundamentals';
  name: string = 'Joe';
  constructor(){
    this.title = 'Angular en JoeDayz';
  }

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = "Diaz";
  }
}
