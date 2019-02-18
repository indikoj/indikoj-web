import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, tap, map } from 'rxjs/operators';
import { TipoServico } from '../shared/TipoServico';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TipoServicoService {
  private BASE_URL: string = "http://localhost:8088/agenda-digital";
  private apiUrl = `${this.BASE_URL}/tiposervico`;

  constructor(private http: HttpClient) { }

  getTipoServicos(): Observable<TipoServico[]> {
    return this.http.get<TipoServico[]>(this.apiUrl).pipe(
      tap(tipoServicos => console.log('Trouxe os files' + tipoServicos)),
      catchError(this.handleError('getTipoServicos', []))
    );
  }

  addTipoServico(tipoServico: TipoServico): Observable<TipoServico> {
    return this.http.post<TipoServico>(this.apiUrl, tipoServico, httpOptions).pipe(
      tap((tipoServico: TipoServico) => console.log('adicionou o tipoServico' + tipoServico)),
      catchError(this.handleError<TipoServico>('addTipoServicos'))
    );
  }

  updateTipoServico(id: number, tipoServico: TipoServico): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, tipoServico, httpOptions).pipe(
      tap(tipoServico => console.log(`updated tipoServico id=${id}`)),
      catchError(this.handleError<any>('updateTipoServico'))
    );
  }

  getTipoServicoPorId(id: number): Observable<TipoServico> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<TipoServico>(url).pipe(
      tap(tipoServico => console.log(`busca tipoServico pelo id=${id}`)),
      catchError(this.handleError<TipoServico>(`busca fimes por id=${id}`))
    );
  }

  deleteTipoServico(id: number): Observable<TipoServico> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<TipoServico>(url, httpOptions).pipe(
      tap(tipoServico => console.log(`deleta tipoServico por id=${id}`)),
      catchError(this.handleError<TipoServico>('deleteTipoServico'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}
