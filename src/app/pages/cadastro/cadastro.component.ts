import { Component } from '@angular/core';
import { Clientes } from '../../services/types/typesCli';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  itulo: string = 'Cadastro de Clientes';
  clienteId?: number;

  cliente: Clientes = {} as Clientes;

  constructor(private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.clienteId = Number(this.route.snapshot.params['id']);

    if (this.clienteId) {
      service.buscarPorId(this.clienteId).subscribe(cliente => {

        if (cliente) {
          this.cliente.id = cliente.id;
          this.cliente.nome = cliente.nome;
          this.cliente.email = cliente.email;
          this.cliente.senha = cliente.senha;
          this.cliente.telefone = cliente.telefone;
          this.cliente.endereco = cliente.endereco;
        }

      })
    }
  }

  submeterCli() {

    if (this.clienteId) {
      this.service.editar(this.cliente).subscribe(() => {
        this.router.navigate(['/']);
      })
    } else {
      this.service.incluir(this.cliente).subscribe(() => {
        this.router.navigate(['/']);
      })
    }

  }

}
