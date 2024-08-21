import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";
import {DatePipe, NgIf, UpperCasePipe} from "@angular/common";


@Component({
  selector: "passenger-detail",
  standalone: true,
  styleUrl: "./passenger-detail.component.scss",
  imports: [
    DatePipe,
    UpperCasePipe,
    NgIf
  ],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input type="text" [value]="detail.fullname" (input)="onNameChange(name.value)" #name>
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date:
        {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
      </div>
      <div class="children">
        Children: {{ detail.children?.length || 0 }}
      </div>
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit'}}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent {

  @Input()
  detail: Passenger = {} as Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter();

  editing: boolean = false;

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if(this.editing) {
      this.edit.emit(this.detail)
    }
    this.editing = !this.editing;
  }

  onRemove() {
      this.remove.emit(this.detail);
  }
}
