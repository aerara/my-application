import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  g = new FormControl('');
  title = 'My Resume';
  contactForm: FormGroup;
  isHidden = true;
  
  constructor() {
    this.contactForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'email': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'cont': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'add': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'sub': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'mess': new FormControl('', [Validators.required, Validators.minLength(1)])
    })
  }

  ngOnInit() {
  }

  formValue: any;
  onSubmit() {
    console.log(this.contactForm.value)
    this.isHidden = false;
    this.formValue = this.contactForm.value;
  }
}