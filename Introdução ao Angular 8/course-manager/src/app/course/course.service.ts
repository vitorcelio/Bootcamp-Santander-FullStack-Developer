import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  private urlBase: string = 'http://localhost:3100/api/courses';

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.urlBase);
  }

  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.urlBase}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.http.put<Course>(`${this.urlBase}/${course.id}`, course);
    } else {
      return this.http.post<Course>(`${this.urlBase}`, course);
    }
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}/${id}`);
  }
}
