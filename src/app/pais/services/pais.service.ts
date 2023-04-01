import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = `https://restcountries.com/v3.1`;

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,population,cca2,flags');
  }
  // private params = '?fields=name,population,cca2,flags';

  constructor(private http: HttpClient) {}

  buscarPais = (termino: string): Observable<Country[]> => {
    const url: string = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  };

  buscarCapital = (termino: string): Observable<Country[]> => {
    const url: string = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  };

  getPaisPorCodigo = (id: string): Observable<Country[]> => {
    const url: string = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  };

  buscarRegion = (id: string): Observable<Country[]> => {
    const url: string = `${this.apiUrl}/region/${id}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  };
}
