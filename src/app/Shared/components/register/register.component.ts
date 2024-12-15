import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// interface IRegister {
//   fullName: string
//   email: string
//   password: string
//   confirmPassword: string
// }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  // registerModel : IRegister={
  //   fullName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // };

  public form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ["",[Validators.required,Validators.minLength(4)]],
      email:["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]],
      confirmPassword: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]],

    })
  }

















  onSubmit() {
    if (!this.passwordMismatch()) {
      console.log('Registration form submitted:', this.form);
      // Add your registration logic here
    }
  }

  passwordMismatch(): boolean {
    return this.form.get('password')?.value !== this.form.get('confirmPassword')?.value;
  }

  OnEmailChanged(email: string): void {
    console.log("Email Is ", email)
  }
}
