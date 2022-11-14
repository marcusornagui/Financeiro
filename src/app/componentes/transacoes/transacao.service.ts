import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transacao } from './transacoes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private readonly API = 'http://localhost:3000/transacoes'

  constructor(private http: HttpClient) { }

  listar(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.API)
  }

  criar(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(this.API, transacao)
  }

  editar(transacao: Transacao): Observable<Transacao> {
    const url = `${this.API}/${transacao.id}`
    return this.http.put<Transacao>(url, transacao)
  }

  excluir(id: number): Observable<Transacao> {
    const url = `${this.API}/${id}`
    return this.http.delete<Transacao>(url)
  }

  buscarPorId(id: number): Observable<Transacao> {
    const url = `${this.API}/${id}`
    return this.http.get<Transacao>(url)
  }

  


}
