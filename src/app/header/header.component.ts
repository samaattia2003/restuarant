
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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