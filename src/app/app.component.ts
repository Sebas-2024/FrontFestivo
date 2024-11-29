import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; // Importa el módulo de la toolbar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Para animaciones de Angular Material


@Component({
  selector: 'app-root',
  standalone: true, 
  imports:[
    RouterOutlet,
    MatToolbarModule, 
    BrowserAnimationsModule
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontFestivo';
}
