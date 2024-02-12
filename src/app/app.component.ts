import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import { FirstWordStylingDirective } from './first-word-styling.directive'; 
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FirstWordStylingDirective, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstApp';
  username: String = "";
  userage:Number = 0;
  isTextVisible = true; 
  toggleTextVisibility() {
    console.log('toggleTextVisibility() called');
    this.isTextVisible = !this.isTextVisible;
    console.log('isTextVisible:', this.isTextVisible);
  }
}
