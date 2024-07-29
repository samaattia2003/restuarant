import { Component } from '@angular/core';

@Component({
  selector: 'app-homesec',
  standalone: true,
  imports: [],
  templateUrl: './homesec.component.html',
  styleUrl: './homesec.component.css'
})
export class HomesecComponent {

slideIndex: number = 1;

showSlides(n: number): void {
    let i: number;
    let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
    let dots: HTMLCollectionOf<Element> = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        (dots[i] as HTMLElement).className = (dots[i] as HTMLElement).className.replace(" active", "");
    }
    (slides[this.slideIndex - 1] as HTMLElement).style.display = "block";
    (dots[this.slideIndex - 1] as HTMLElement).className += " active";
}

currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
}

linkChecker(): void {
    const result: boolean = confirm('Are you sure?');

    if (result == true) {
        location.href = 'home.html';
    }
}
}