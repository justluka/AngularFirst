import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { LikeChangedEventArgs } from './like/like.component';

import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task={
    title: 'Review applications',
    assignee:{ name:null}
  };
  canSave=true;
  title = 'app';
  post={
    title:"Title",
    isFavorite:true
  };

  tweet={
    body:'Here is the body of a tweet..',
    isLiked: true,
    likesCount:10
  };

  courses = [1,2];

    onFavoriteChange(eventArgs: FavoriteChangedEventArgs){
      console.log("Favorite changed : ", eventArgs);
    };


    onLikeChange(eventArgs: LikeChangedEventArgs){
      console.log("like changed : ", eventArgs);
    };


     viewMode = 'map';

     coursesList;

      onAdd(){
        this.coursesList.push({id:4,name:'course4'});
      }
onRemove(course){
 let index= this.coursesList.indexOf(course);
 this.coursesList.splice(index,1);
};

onChange(course){
  course.name='UPDATED';
 };

loadCourses(){
  this.coursesList=[
    { id: 1, name: 'course 1'},
    { id: 2, name: 'course 2'},
    { id: 3, name: 'course 3'}
  ];

};


trackCourse(index, course){
  return course? course.id: undefined;
}

}
