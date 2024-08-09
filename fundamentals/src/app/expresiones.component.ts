import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-expresiones',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app">
      {{ title }}
      <div>
      {{ numberOne + numberTwo }}
      </div>
      <div>
        {{ isHappy ? ':)' : ':('}}
      </div>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class ExpresionesComponent {
  title = 'fundamentals';
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo: number = 2;
  constructor(){
    this.title = 'Angular en JoeDayz';
  }
}
