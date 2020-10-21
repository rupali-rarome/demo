import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethod = [{ id: 1, name: 'Email' }, { id: 2, name: 'Phone' }, { id: 3, name: 'In-Personal' }];
  gender = [{ id: 1, name: 'Male' }, { id: 2, name: 'Female' }];

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }

}
