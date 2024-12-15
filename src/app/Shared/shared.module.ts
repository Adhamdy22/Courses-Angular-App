import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Import FormsModule
@NgModule({
  declarations: [
    SpinnerComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, // Add FormsModule to imports
    //TranslateModule.forRoot()
    ReactiveFormsModule
  ],
  exports:[
    SpinnerComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent

  ]
})
export class SharedModule { }
