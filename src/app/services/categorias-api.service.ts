import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, tap, map } from 'rxjs/operators';
import { Categoria } from '../shared/Categoria';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoriasApiService {
  private BASE_URL: string = environment.baseUrl;
  private apiUrl = `${this.BASE_URL}/categorias`;

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl).pipe(
      tap(categorias => console.log('Trouxe os files' + categorias)),
      catchError(this.handleError('getCategorias', []))
    );
  }

  addCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, categoria, httpOptions).pipe(
      tap((categoria: Categoria) => console.log('adicionou o categoria' + categoria)),
      catchError(this.handleError<Categoria>('addCategorias'))
    );
  }

  updateCategoria(id: number, categoria: Categoria): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, categoria, httpOptions).pipe(
      tap(categoria => console.log(`updated categoria id=${id}`)),
      catchError(this.handleError<any>('updateCategoria'))
    );
  }

  getCategoriaPorId(id: number): Observable<Categoria> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Categoria>(url).pipe(
      tap(categoria => console.log(`busca categoria pelo id=${id}`)),
      catchError(this.handleError<Categoria>(`busca fimes por id=${id}`))
    );
  }

  deleteCategoria(id: number): Observable<Categoria> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Categoria>(url, httpOptions).pipe(
      tap(categoria => console.log(`deleta categoria por id=${id}`)),
      catchError(this.handleError<Categoria>('deleteCategoria'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
