import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {

  _filterBy!: string;
  _courses: Course[] = [];
  filterCourses: Course[] = [];

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() : void {
    this.service.getAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filterCourses = this._courses;
      },
      error: err => {
        console.log('Error', err);
      }
    });
  }

  delete(id: number) : void {
    this.service.delete(id).subscribe({
      next: () => {
        this.getAll();
      },
      error: err => console.log('Error', err)
    });
  }

  set filter(valor: string) {
    this._filterBy = valor;
    this.filterCourses = this._courses.filter((course: Course) => 
      course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }

}
