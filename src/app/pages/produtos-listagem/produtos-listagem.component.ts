import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../services/types/types';
import { ProdutoService } from '../../services/produto.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos-listagem',
  imports: [RouterLink],
  templateUrl: './produtos-listagem.component.html',
  styleUrl: './produtos-listagem.component.css'
})
export class ProdutosListagemComponent implements OnInit {
 
  titulo:string = 'Gerenciamento de Produtos';
 
  listaProdutos: Produtos[] = [];

  constructor(private service: ProdutoService,
              private router: Router
  ){}

  ngOnInit(): void {
    this.service.listar().subscribe((produtos)=>{
      this.listaProdutos = produtos;
    })
  }

  excluir(id:number){
    if(id){
      this.service.excluir(id).subscribe(()=>{
        window.location.reload();
      })
    }
  }

}
