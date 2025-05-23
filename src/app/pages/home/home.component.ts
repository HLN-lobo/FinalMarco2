import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  marcas = [
    { nome: 'DarkLab' },
    { nome: 'Max' },
    { nome: 'BlackSkull' },
    { nome: 'Growth' },
  ]
}
