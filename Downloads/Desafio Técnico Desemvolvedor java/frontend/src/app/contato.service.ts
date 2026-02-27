import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contato {
  id?: number;
  nome: string;
  telefone: string;
  email: string;
  endereco?: string;
  observacoes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private baseUrl = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  list(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.baseUrl);
  }

  get(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.baseUrl}/${id}`);
  }

  create(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.baseUrl, contato);
  }

  update(id: number, contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.baseUrl}/${id}`, contato);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}