import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, tap, map } from 'rxjs/operators';
import { JobOpportunity } from '../../shared/JobOpportunity';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class JobOpportunityService {
  private BASE_URL: string = environment.baseUrl;
  private apiUrl = `${this.BASE_URL}/job-opportunities`;
 
  constructor(private http: HttpClient) {}

  get(): Observable<JobOpportunity[]> {
    return this.http.get<JobOpportunity[]>(this.apiUrl, httpOptions).pipe(
      tap(JobOpportunity => console.log('get all JobOpportunityTypes' + JobOpportunity)),
      catchError(this.handleError('get-JobOpportunityType', []))
    );
  }

  add(JobOpportunityType: JobOpportunity): Observable<JobOpportunity> {
    return this.http.post<JobOpportunity>(this.apiUrl, JobOpportunityType, httpOptions).pipe(
      tap((JobOpportunityType: JobOpportunity) => console.log('adicionou o JobOpportunityType' + JobOpportunityType)),
      catchError(this.handleError<JobOpportunity>('add-JobOpportunityType'))
    );
  }

  update(id: number, JobOpportunity: JobOpportunity): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, JobOpportunity, httpOptions).pipe(
      tap(JobOpportunityType => console.log(`updated JobOpportunityType id=${id}`)),
      catchError(this.handleError<any>('update-JobOpportunityType'))
    );
  }

  getById(id: number): Observable<JobOpportunity> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<JobOpportunity>(url, httpOptions).pipe(
      tap(JobOpportunityType => console.log(`JobOpportunityType by id=${id}`)),
      catchError(this.handleError<JobOpportunity>(`JobOpportunityType by id=${id}`))
    );
  }

  remove(id: number): Observable<JobOpportunity> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<JobOpportunity>(url, httpOptions).pipe(
      tap(JobOpportunityType => console.log(`remove JobOpportunityType by id=${id}`)),
      catchError(this.handleError<JobOpportunity>('remove - JobOpportunityType'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}
