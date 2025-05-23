import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  itemsMenu = [
    { label: 'Home',  link: '/' },
    { label: 'Login',  link: '/login' },
    { label: 'Cadastro',  link: '/cadastro' },
  ]

}
