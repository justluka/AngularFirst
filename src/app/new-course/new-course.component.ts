import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormArray,FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewCourseComponent  {
 form;
    constructor(fb: FormBuilder){
     this.form=   fb.group({
          name:['', Validators.required],
          contact: fb.group({
             email:[],
             phone:[]
          }),
          topics: fb.array([])
        });
    }

  /*  form =new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormGroup({
         email: new FormControl(),
         phone: new FormControl()
      }),
      topics: new FormArray([])
    });*/

   /* addTopic(topic: HTMLInputElement){
      this.topics.push(new FormControl(topic.value));
      topic.value='';
    }

    removeTopic(topic: FormControl){
      let index =this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);
    }*/

     get topics (){
       return this.form.get('topics') as FormArray;
     } 
}
