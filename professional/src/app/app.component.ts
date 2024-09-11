import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StockInventoryComponent} from "./stock-inventory/containers/stock-inventory.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StockInventoryComponent
  ],
  template: `

    <div>
      <stock-inventory></stock-inventory>
    </div>

  `
})
export class AppComponent {
  title = 'professional';
}
