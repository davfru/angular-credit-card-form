import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  imports: [],
  templateUrl: './card-form.html',
  styleUrl: './card-form.css'
})
export class CardForm {

  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
}
