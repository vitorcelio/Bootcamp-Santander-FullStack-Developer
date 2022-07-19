import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  course = new Course;

  constructor(private route: ActivatedRoute, private service: CourseService) { }

  ngOnInit(): void {
    this.getById();
  }
  
  getById() : void {
    this.service.getById(Number(this.route.snapshot.paramMap.get('id'))).subscribe({
      next: course => {
        this.course = course;
      },
      error: err => console.log('Error', err)
    });
  }

  save() {
    this.service.save(this.course).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });
  }
}
