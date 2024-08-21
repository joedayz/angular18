import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <div>
      Not found, <a routerLink="/">go home</a>?
    </div>
  `
})
export class NotFoundComponent {}
