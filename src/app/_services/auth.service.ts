import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.baseUrl+'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.baseUrl+'signup',

      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  registerUser(organismId: string, signupRequest: any): Observable<any> {
    return this.http.post(this.baseUrl+'signup' + organismId + '/organism', signupRequest, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  logout(): Observable<any> {
    return this.http.post<any>(this.baseUrl+ 'signout', {}, { withCredentials: true });
  }
}
