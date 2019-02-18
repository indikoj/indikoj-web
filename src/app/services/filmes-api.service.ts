import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, tap, map } from 'rxjs/operators';
import { Filme } from '../shared/Filme';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
;

@Injectable({
  providedIn: 'root'
})
export class FilmesApiService {
  private BASE_URL: string = environment.baseUrl;
  private apiUrl = `${this.BASE_URL}/filmes`;

  constructor(private http: HttpClient) { }

  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.apiUrl).pipe(
      tap(filmes => console.log('Trouxe os files' + filmes)),
      catchError(this.handleError('getFilmes', []))
    );
  }

  addFilme(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(this.apiUrl, filme, httpOptions).pipe(
      tap((filme: Filme) => console.log('adicionou o filme' + filme)),
      catchError(this.handleError<Filme>('addFilmes'))
    );
  }

  updateFilme(id: number, filme: Filme): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, filme, httpOptions).pipe(
      tap(filme => console.log(`updated filme id=${id}`)),
      catchError(this.handleError<any>('updateFilme'))
    );
  }

  getFilmePorId(id: number): Observable<Filme> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Filme>(url).pipe(
      tap(filme => console.log(`busca filme pelo id=${id}`)),
      catchError(this.handleError<Filme>(`busca fimes por id=${id}`))
    );
  }

  deleteFilme(id: number): Observable<Filme> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Filme>(url, httpOptions).pipe(
      tap(filme => console.log(`deleta filme por id=${id}`)),
      catchError(this.handleError<Filme>('deleteFilme'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}