import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categorias = [
    { nome: 'Marcas' },
    { nome: 'Creatina' },
    { nome: 'Proteína' },
    { nome: 'Pré-treino' },
  ];
}
