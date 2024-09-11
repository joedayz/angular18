import {Component, OnInit} from "@angular/core";
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, NgForOf} from "@angular/common";
import {StockSelectorComponent} from "../components/stock-selector/stock-selector.component";
import {StockProductsComponent} from "../components/stock-products/stock-products.component";
import {StockBranchComponent} from "../components/stock-branch/stock-branch.component";
import {Product} from "../models/product.interface";



@Component({
  selector: "stock-inventory",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    StockSelectorComponent,
    StockProductsComponent,
    StockBranchComponent,
    NgForOf
  ],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <stock-branch [parent]="form">
        </stock-branch>

        <stock-selector
            [parent]="form"
            [products]="products">
        </stock-selector>



        <div class="stock-inventory__buttons">
          <button
            type="submit" [disabled]="form.invalid">
            Order stock
          </button>
        </div>

        <pre>{{ form.value | json }}</pre>

      </form>
    </div>
  `
})
export class StockInventoryComponent implements OnInit {

  form: FormGroup;

  products: Product[] = [
    {"id": 1, "price": 2800, "name": "MackBook Pro"},
    {"id": 2, "price": 50, "name": "USB-C adaptador"},
    {"id": 3, "price": 400, "name": "iPhone"},
    {"id": 4, "price": 900, "name": "iPad"},
    {"id": 5, "price": 600, "name": "Apple Watch"},
  ];


  onSubmit() {
    console.log("Submit: ", this.form.value);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      store: new FormGroup({
        branch: new FormControl('B1B2'),
        code: new FormControl('1234')
      }),
      selector: new FormGroup({
        product_id: new FormControl(''),
        quantity: new FormControl(10)
      }),
      stock: new FormArray([])
    });
  }
}
