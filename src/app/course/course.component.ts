//import { CoursesService } from './../courses.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseComponent  {

    title = "List of courses....";
    imageUrl="https://s3.amazonaws.com/9lessonspics/nodeapi/nodebanner.png";
    colspan=2;
    courses;

    constructor(service:CoursesService){
       //let service = new CoursesService();
       this.courses = service.getCourses();
    }

}
