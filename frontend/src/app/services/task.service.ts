import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8765/api/v1/tasks';

  constructor(private http: HttpClient) {}

  createTask(task: Task): Observable<Task> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('accept', 'application/hal+json');

    return this.http.post<Task>(this.baseUrl, task, { headers });
  }

  getAllTasks(page: number = 0, size: number = 20): Observable<any> {
    const endpoint = `${this.baseUrl}?page=${page}&size=${size}`;
    return this.http.get(endpoint);
  }

  // Fetch a task by ID
  getTaskById(taskId: number): Observable<any> {
    const endpoint = `${this.baseUrl}/${taskId}`;
    return this.http.get(endpoint);
  }

  // Update a task by ID
  updateTask(taskId: number, updatedTask: any): Observable<any> {
    const endpoint = `${this.baseUrl}/${taskId}`;
    return this.http.put(endpoint, updatedTask);
  }

  // Delete a task by ID
  deleteTask(taskId: number): Observable<any> {
    const endpoint = `${this.baseUrl}/${taskId}`;
    return this.http.delete(endpoint);
  }
}
