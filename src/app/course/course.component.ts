import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title="List of Courses";
  courses;
  constructor(service:CourseService) {      
    this.courses=service.getCourses();
  }
  ngOnInit() {
  }
  
  getTitle(){
    return this.title;
  }
}
