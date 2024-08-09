import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app">
        <h1 [innerHTML]="title"></h1>
        <h1>{{title}}</h1>
        <img [src]="logo">
        <input type="text" [value]="name">
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class PropertyBindingComponent {
  title = 'fundamentals';
  name: string = 'Joe';
  logo: string = 'img/logo.png';
  constructor(){
    this.title = 'Angular en JoeDayz';
  }
}
