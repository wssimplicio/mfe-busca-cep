import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from './cep';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {
private readonly api = 'https://brasilapi.com.br/api/cep/v1'

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  buscaCep(cep: number): Observable<Cep>{
    const url = `${this.api}/${cep}`
    return this.httpClient.get<Cep>(url)
  }

}
