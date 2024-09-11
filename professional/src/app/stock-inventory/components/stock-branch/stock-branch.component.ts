

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'stock-branch',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
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
