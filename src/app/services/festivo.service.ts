import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  private apiUrl = 'http://localhost:8080/festivos/verificar';  // URL de la API

  constructor(private http: HttpClient) {}

  verificarFestivo(ano: number, mes: number, dia: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${ano}/${mes}/${dia}`);
  }
}
