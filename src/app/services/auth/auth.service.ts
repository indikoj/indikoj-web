import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../../shared/User';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL: string = environment.baseUrl;
  private apiUrl = `${this.BASE_URL}/auth`;

  constructor(private http: HttpClient) { }

  /*login2(user): Promise<any> {
    let url: string = `${this.BASE_URL}/auth`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }*/

  login(user: User): Promise<User> {
    return this.http.post<User>(this.apiUrl, user, httpOptions).toPromise();
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}