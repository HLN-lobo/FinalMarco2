import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  senha: string = '';

  constructor(private router: Router) { }

  onBotaoClicado(): void {
    if (this.login.trim() && this.senha.trim()) {
      if (this.login === 'admin' && this.senha === '123') {
        this.router.navigate(['/pessoaListagem']);
      } else {
        alert('Dados inválidos!');
      }
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
