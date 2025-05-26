import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../services/types/typesCli';
import { ClienteService } from '../../services/cliente.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-clientes-listagem',
  imports: [RouterLink],
  templateUrl: './clientes-listagem.component.html',
  styleUrl: './clientes-listagem.component.css'
})
export class ClientesListagemComponent {

  titulo:string = 'Gerenciamento de Clientes';
 
  listaClientes: Clientes[] = [];

  constructor(private service: ClienteService,
              private router: Router
  ){}

  ngOnInit(): void {
    this.service.listar().subscribe((clientes)=>{
      this.listaClientes = clientes;
    })
  }

  excluir(id:string){
    if(id){
      this.service.excluir(id).subscribe(()=>{
        window.location.reload();
      })
    }
  }

}
