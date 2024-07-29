import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

//   alert("Welcome to contact us");

form2ndAction(): void {
    const submitBtn: HTMLElement | null = document.querySelector("#submitBtn");
    const msgForm: HTMLElement | null = document.querySelector("#msgForm");

    if (submitBtn) {
        submitBtn.onclick = () => {
            if (msgForm) {
                msgForm.innerHTML = "Done ☑";
                submitBtn.classList.add("active");
            }
        }
    }
}

formAction(): void {
    const result: boolean = confirm('Are you sure?');

    if (result) {
        this.form2ndAction();
    }
  }

linkChecker(): void {
    const result: boolean = confirm('Are you sure?');

    if (result) {
        location.href = 'shop.component.html';
    }
}

}
