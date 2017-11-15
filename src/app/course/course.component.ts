import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseComponent  {

    title = "List of courses....";
    noCourses = 30124;
    rating = 4.9745;
    price = 155.65;
    releaseDate= new Date(2016,3,1);
    imageUrl="https://s3.amazonaws.com/9lessonspics/nodeapi/nodebanner.png";
    text = "This is a new application that was created with angular and other frameworks.!";
    colspan=2;
    courses;
    isActive=true;

    @Input() isFavorie: boolean;

    post= {
       title:"Titles",
       isFavorite: true
    }

    constructor(service:CoursesService){
       //let service = new CoursesService();
       this.courses = service.getCourses();
    }

    email;

    onSave($event){
      $event.stopPropagation();
      
      alert('Hello world');
      console.log($event);
    }

    onOther($event){
      console.log("First button");
    }

    onKeyup(value){
      alert("You pressed enter..!" + this.email);
    }
}
