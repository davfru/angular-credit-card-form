import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardForm } from './card-form/card-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CardForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('credit-card-form');
}
