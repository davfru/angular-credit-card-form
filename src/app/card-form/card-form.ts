import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input';

@Component({
  selector: 'app-card-form',
  imports: [ReactiveFormsModule, JsonPipe, InputComponent],
  templateUrl: './card-form.html',
  styleUrl: './card-form.css'
})
export class CardForm {

  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(5),
      Validators.pattern(/\s/)
    ]),
  });

  constructor() {
    console.log(this.cardForm.get('name'))
  }
}
