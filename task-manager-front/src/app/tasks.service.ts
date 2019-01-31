import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ITask } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  API_URL = "http://localhost:8080/api"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  create(task: ITask): Observable<ITask> {
    return this.http.post(`${this.API_URL}/tasks`, task);
  }

  query(): Observable<ITask> {
    return this.http.get<ITask>(`${this.API_URL}/tasks`);
  }
}
