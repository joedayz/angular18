import {Component, Input} from "@angular/core";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Product} from "../../models/product.interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'stock-selector',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  template: `

    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select stock</option>
          <option *ngFor="let product of products" [value] = "product.id">
            {{ product.name}}
          </option>
        </select>
        <input type="number"  formControlName="quantity">
        <button type="button" >
          Add Stock
        </button>
      </div>
    </div>

  `
})
export class StockSelectorComponent  {


  @Input()
  parent:  FormGroup;

  @Input()
  products: Product[];


}
