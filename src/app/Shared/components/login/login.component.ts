import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from './state/login.actions';
import { Store } from '@ngrx/store';

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

  constructor(private fb:FormBuilder,private store:Store<{email:string;password:string}>){
    this.form=this.fb.group({
      email:["",[Validators.email,Validators.required]],
      password:["",Validators.required]
    })
  }

  onSubmit() {
    // this.store.dispatch({
    //   type:'Login Page',
    //   payload:{
    //     email:this.form.get('email')?.value,
    //     password:this.form.get('password')?.value
    //   }
    // })

    const {email , password} = this.form.value

    this.store.dispatch(login({email:email,password:password}))
    console.log('Form Submitted!', login({email:email,password:password}));
    this.form.reset()
    // Perform login logic here (API call, validation, etc.)
  }
}
