import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { GetCoursesService } from '../get-courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title="List of Courses";
  courses;
  newCourse;
  constructor(service:CourseService,getCourses:GetCoursesService) {      
    this.courses=service.getCourses();
    this.newCourse=getCourses.getCoursesFromService();
  }
  ngOnInit() {
  }
  
  getTitle(){
    return this.title;
  }
}
