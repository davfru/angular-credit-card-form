import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class InputComponent {

  @Input() control!: FormControl;
  @Input() label!: string;

  constructor() {
  }

  showErrors() {
    return this.control.dirty && this.control.touched && this.control.errors;
  }
}
