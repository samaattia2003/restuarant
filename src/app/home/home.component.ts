import { Component } from '@angular/core';
import { DeliveryComponent } from '../delivery/delivery.component';
import { HomesecComponent } from '../homesec/homesec.component';
import { HomeseccComponent } from '../homesecc/homesecc.component';
import { HomelecComponent } from '../homelec/homelec.component';
import { OpinionsComponent } from '../opinions/opinions.component'
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DeliveryComponent, HomesecComponent, HomeseccComponent, HomelecComponent, OpinionsComponent, BookingComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent { 
  dropdownStates: { [key: string]: boolean } = {
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false
  };

  toggleDropdown(id: string): void {
    this.dropdownStates[id] = !this.dropdownStates[id];
  }
}
