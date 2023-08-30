import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  h3 {
    color: green
  }
  `],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-app';
}
