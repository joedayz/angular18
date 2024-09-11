import {Component, Input, OnInit} from "@angular/core";
import {Product} from "../../models/product.interface";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'stock-selector',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select stock</option>
          <option *ngFor="let product of products" [value]="product.id">
            {{ product.name }}
          </option>
        </select>

        <input type="number" step="10" min="10" max="1000" formControlName="quantity">

        <button type="button">Add Stock</button>
      </div>
    </div>
  `
})
export class StockSelectorComponent implements OnInit {

  @Input() parent: FormGroup;

  @Input() products: Product[];

  ngOnInit(): void {
    if (!this.parent) {
      console.error('Parent formgroup is not initialized');
    } else {
      console.log('Parent inicializado');
    }

    if (!this.parent.get('selector')) {
      console.error('FormGroup selector is not found in parent');
    } else {
      console.log('Selector encontrado');
    }
  }
}
