import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, tap, map } from 'rxjs/operators';
import { Candidate } from '../../shared/Candidate';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private BASE_URL: string = environment.baseUrl;
  private apiUrl = `${this.BASE_URL}/candidates`;
 
  constructor(private http: HttpClient) {}

  get(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.apiUrl, httpOptions).pipe(
      tap(candidate => console.log('get all Candidate' + candidate)),
      catchError(this.handleError('get-Candidate', []))
    );
  }

  add(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(this.apiUrl, candidate, httpOptions).pipe(
      tap((candidate: Candidate) => console.log('adicionou o Candidate' + candidate)),
      catchError(this.handleError<Candidate>('add-Candidate'))
    );
  }

  update(id: number, candidate: Candidate): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, candidate, httpOptions).pipe(
      tap(candidate => console.log(`updated candidate id=${id}`)),
      catchError(this.handleError<any>('update-candidate'))
    );
  }

  getById(id: number): Observable<Candidate> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Candidate>(url, httpOptions).pipe(
      tap(candidate => console.log(`Candidate by id=${id}`)),
      catchError(this.handleError<Candidate>(`candidate by id=${id}`))
    );
  }

  remove(id: number): Observable<Candidate> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Candidate>(url, httpOptions).pipe(
      tap(candidate => console.log(`remove candidate by id=${id}`)),
      catchError(this.handleError<Candidate>('remove - Candidate'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}
