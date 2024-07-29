import { Component } from '@angular/core';
import { Page1Component } from '../page1/page1.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [Page1Component],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

}
