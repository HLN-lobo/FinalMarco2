import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ProdutosListagemComponent } from './pages/produtos-listagem/produtos-listagem.component';
import { ProdutosFormComponent } from './pages/produtos-form/produtos-form.component';
import { ClientesListagemComponent } from './pages/clientes-listagem/clientes-listagem.component';
import { ClientesFormComponent } from './pages/clientes-form/clientes-form.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'cadastro',
        component: CadastroComponent,
        title: 'Cadastro',
    },
    {
        path: 'produtos',
        component: ProdutosListagemComponent,
        title: 'Gerenciamento de Produtos',
    },
    {
        path: 'produtos/incluir',
        component: ProdutosFormComponent,
        title: 'Inclusão de Produtos',
    },
    {
        path: 'produtos/alterar/:id',
        component: ProdutosFormComponent,
        title: 'Alteração de Produtos',
    },
    {
        path: 'clientes',
        component: ClientesListagemComponent,
        title: 'Gerenciamento de Clientes',
    },
    {
        path: 'clientes/incluir',
        component: ClientesFormComponent,
        title: 'Gerenciamento de Clientes',
    },
    {
        path: 'clientes/alterar/:id',
        component: ClientesFormComponent,
        title: 'Gerenciamento de Clientes',
    }
];
