import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { LikeChangedEventArgs } from './like/like.component';

import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

}
