import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  dropdownStates: { [key: string]: boolean } = {
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false
  };
isFormSubmitted: any;

  toggleDropdown(id: string): void {
    this.dropdownStates[id] = !this.dropdownStates[id];
  }
    onSubmit(): void {
      this.isFormSubmitted = true;
    }
  }


