import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  tabContents: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any>('https://dummyjson.com/recipes').subscribe(
      response => {
        console.log('API Response:', response);  // Log the response to verify
        this.display(response.recipes);
      },
      error => console.error('Error fetching data', error)
    );
  }

  display(some: any[]): void {
    let count: string[] = [];
    for (let j = 0; j < 3; j++) {
      let cartoona = '';
      for (let i = j * 10; i < 10 + (j * 10); i++) {
        if (some[i]) {
          cartoona += `
            <div class="position-relative col-lg-3 col-sm-12 item-hover layer card d-flex flex-wrap justify-content-center align-items-center m-2 pt-4">
              <i class="fa-regular fa-heart position-absolute top-0 start-0 bg-dark p-2 heart-change rounded-1" ></i>
              <img src="${some[i].image}" class='w-50 rounded-2'/>
             
              <h5 class='m-3'>${some[i].name}</h5>
              <div class='stars-rate'>
                <i class="fa-solid fa-star fa-xs" ></i>
                <i class="fa-solid fa-star fa-xs" ></i>
                <i class="fa-solid fa-star fa-xs" ></i>
                <i class="fa-solid fa-star fa-xs" ></i>
                <i class="fa-solid fa-star fa-xs fa-change" ></i>
              </div>
            </div>
          `;
        }
      }
      count.push(cartoona);
    }

    this.tabContents = count;
    console.log('Tab Contents:', this.tabContents);  // Log the tab contents to verify
  }
}
