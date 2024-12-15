import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  // loginModel = {
  //   email: '',
  //   password: ''
  // };


  form:FormGroup

  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      email:["",[Validators.email,Validators.required]],
      password:["",Validators.required]
    })
  }

  onSubmit() {
    console.log('Form Submitted!', this.form);
    // Perform login logic here (API call, validation, etc.)
  }
}
