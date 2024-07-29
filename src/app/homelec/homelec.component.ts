import { Component } from '@angular/core';

@Component({
  selector: 'app-homelec',
  standalone: true,
  imports: [],
  templateUrl: './homelec.component.html',
  styleUrl: './homelec.component.css'
})
export class HomelecComponent {

}

const countDownDate: number = new Date("Oct 1, 2024 00:00:00").getTime();
      
const Timeout = setInterval(() => {
 
  const now: number = new Date().getTime();
  const distance: number = countDownDate - now;
   

  const days: number = Math.floor(distance / (1000*60*60*24));
  const hours: number = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes: number = Math.floor((distance % (1000*60*60) / (1000*60)));
  const seconds: number = Math.floor((distance % (1000*60)) / 1000);
  const demoElement: HTMLElement | null = document.getElementById("demo"); 


if (demoElement) {
demoElement.innerHTML =  ` ${days}                 
${ hours}            ${minutes}    ${seconds}`;

  if(distance < 0){
    clearInterval(Timeout);
    demoElement.innerHTML = "00";
  } 
}
}, 1000);



