import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Transacao } from './transacoes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private readonly API = 'http://localhost:3000/transacoes'

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Transacao[]> {
    const itensPorPagina = 6;

    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)

      if(filtro.trim().length > 2) {
        params = params.set("q", filtro)
      }

      if(favoritos) {
        params = params.set("favorito", true)
      }

    return this.http.get<Transacao[]>(this.API, {params})
  }



  criar(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(this.API, transacao)
  }

  editar(transacao: Transacao): Observable<Transacao> {
    const url = `${this.API}/${transacao.id}`
    return this.http.put<Transacao>(url, transacao)
  }

  mudarFavorito(transacao: Transacao): Observable<Transacao> {
    transacao.favorito = !transacao.favorito
    return this.editar(transacao)
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
