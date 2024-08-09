import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class="app">
        <input type="text"
            [value]="name"
            (input)="handleChange($event)">

      <ng-template [ngIf]="name.length > 3">
        <div>
          Searching for ... {{ name }}
        </div>
      </ng-template>


        <div *ngIf="name.length > 3">
          Searching for .... {{name}}
        </div>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = 'Joe';

  handleChange(event: any){
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }

}
