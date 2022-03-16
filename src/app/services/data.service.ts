import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private getUrl: string = 'http://localhost:8080/api/v1/todos';
 
  

  constructor(private _httpClient: HttpClient) { }

  getAllTodos() {
    return this._httpClient.get<Todo[]>(this.getUrl).pipe(
      response => response
    )
  }

  addTodo(todo: Todo): Observable<Todo> {
    
    return this._httpClient.post<Todo>(this.getUrl, todo);
  }



  deleteTodo(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }

 updateTodo(id: number, todo: Todo): Observable<Todo>{

  return this._httpClient.put<Todo>(`${this.getUrl}/${id}`, todo);
 }
  
 }
