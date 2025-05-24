import { Component } from '@angular/core';
import { Produtos } from '../../services/types/types';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos-form',
  imports: [FormsModule],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.css'
})
export class ProdutosFormComponent {
  titulo: string = 'Cadastro de Produtos';
  produtoId?: number;

  produto: Produtos = {} as Produtos;

  constructor(private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoId = Number(this.route.snapshot.params['id']);

    if (this.produtoId) {
      service.buscarPorId(this.produtoId).subscribe(produto => {

        if (produto) {
          this.produto.id = produto.id;
          this.produto.nome = produto.nome;
          this.produto.marca = produto.marca;
          this.produto.preco = produto.preco;
          this.produto.tamanho = produto.tamanho;
        }

      })
    }
  }

  submeter() {

    if (this.produtoId) {
      this.service.editar(this.produto).subscribe(() => {
        this.router.navigate(['/produtos']);
      })
    } else {
      this.service.incluir(this.produto).subscribe(() => {
        this.router.navigate(['/produtos']);
      })
    }

  }



}
