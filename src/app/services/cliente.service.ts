import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from './types/typesCli';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'http://localhost:3000/clientes'

  constructor(private http: HttpClient) { }

  listar(): Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.API);
  }

  incluir(cliente: Clientes): Observable<Clientes>{
    return this.http.post<Clientes>(this.API, cliente)
  }

  excluir(id:number): Observable<Clientes>{
    return this.http.delete<Clientes>(this.API + `/${id}`)
  }

  buscarPorId(id:number): Observable<Clientes | undefined>{
    return this.http.get<Clientes>(this.API + `/${id}`);
  }

  editar(cliente: Clientes): Observable<Clientes>{
    const url = `${this.API}/${cliente.id}`;
    return this.http.put<Clientes>(url, cliente);
  }

}
