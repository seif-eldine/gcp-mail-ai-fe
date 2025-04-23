import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://34.1.14.143:8000';  // your FastAPI backend URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(`${this.apiUrl}/login`, body, { headers });
  }

  // Save the token in localStorage
  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  // Get the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Remove the token from localStorage (for logout)
  removeToken(): void {
    localStorage.removeItem('access_token');
  }
}
