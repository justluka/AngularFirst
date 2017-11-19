import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactFormComponent {

    contactMethods = [
       {id:1,name:"Email"},
       {id:2,name:"phone"}
       
    ];
  change(firstName){
    console.log(firstName);
  }

  submit(f){
      console.log(f);
      //f.value this is a json objet to send to your api
  }
    

}
