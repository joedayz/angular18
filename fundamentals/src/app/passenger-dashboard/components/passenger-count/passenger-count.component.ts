import {Component, Input} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: "passenger-count",
  standalone: true,
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <div>
        Total checked in: {{ checkedInCount() }} / {{ items.length }}
      </div>
    </div>
  `
})
export class PassengerCountComponent {

  @Input()
  items: Passenger[] = [];

  checkedInCount(): number {
    if(!this.items) return 0;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }
}
