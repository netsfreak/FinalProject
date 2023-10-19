import { Component,OnInit } from '@angular/core';
import { User } from '../user.interface';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  public user!: User; // our model

 

  ngOnInit() { // we will initialize our form here

   this.user = {

   name: '',

   email: ''

   };

   }

   save(model: User, isValid: boolean)

   {

   // check if model is valid// if valid, call API to save customer

   console.log(model, isValid);

   }
}
