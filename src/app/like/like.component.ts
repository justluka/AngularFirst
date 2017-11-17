import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LikeComponent  {
  @Input('isActive') isActive:boolean;
  @Input('likesCount') likesCount:number;
  

  onClick(){
    this.likesCount += (this.isActive)?-1:1;
     this.isActive =!this.isActive;
  }

}


export interface LikeChangedEventArgs{
  newValue: boolean
}