
import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'stock-products',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <div class="stock-products" [formGroup]="parent">


    </div>

  `
})
export class StockProductsComponent{

  @Input()
  parent: FormGroup;
}
