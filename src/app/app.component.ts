import { HttpClientModule } from '@angular/common/http';
import { BuscaCepComponent } from './pages/busca-cep/busca-cep.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BuscaCepComponent,FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mfe-busca-cep';
}
