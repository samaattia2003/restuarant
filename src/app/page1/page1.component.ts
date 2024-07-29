import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  standalone: true,
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  form(event: Event): void {
    const result: boolean = confirm('Are you sure?');

    if (result === true) {
      document.write("Booking done");
    } else {
      event.preventDefault();
    }
  }

  checkL(l: boolean): void {
    if (l === true) {
      document.write(l.toString());
    } else {
      document.write("try again");
    }
  }
}
