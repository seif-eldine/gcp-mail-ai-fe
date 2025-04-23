import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

// Interface for user (just as an example, adjust as needed)
export interface User {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class AiModelService {
  private apiUrl = 'http://34.1.14.143:8000/'; // FastAPI backend URL

  constructor(private http: HttpClient) {}

  // Get list of users (can be removed if not needed)
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}users`);
  }

  // Get list of todos (tasks)
  getTodos(): Observable<{ todos: Todo[] }> {
    return this.http.get<{ todos: Todo[] }>(`${this.apiUrl}todos`);
  }

  // Method to fetch the AI-generated conclusion (todos)
  getAiConclusion(): Observable<{ todos: Todo[] }> {
    const token = localStorage.getItem('access_token'); // Get the token from localStorage

    // If no token, return an observable with an empty list or handle accordingly
    if (!token) {
      return new Observable<{ todos: Todo[] }>((observer) => {
        observer.next({ todos: [] }); // or handle error based on your need
        observer.complete();
      });
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,  // Send the token in Authorization header
    });

    return this.http.post<{ todos: Todo[] }>(`${this.apiUrl}generate_todos`, {}, { headers });
  }
}
