

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'stock-branch',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
    <div>
      <div formGroupName="store" [formGroup]="parent">
        <input type="text" placeholder="Branch ID" formControlName="branch">
        <input type="text" placeholder="Manager Code" formControlName="code">
      </div>
    </div>

  `
})
export class StockBranchComponent{

  @Input()
  parent:  FormGroup;

}
