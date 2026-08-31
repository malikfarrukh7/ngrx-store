import { Component ,signal} from "@angular/core";
import { RouterLink } from "@angular/router";
import { Button } from "../../shared/components/button";
import {form, Field, FormField, required, minLength, validate } from "@angular/forms/signals";
import { FormsModule } from "@angular/forms";
import { FormErrors } from "../../shared/components/form-errors";
import { registerSchema } from "./register-schema";

@Component({
  imports: [RouterLink, Button, FormField, FormsModule,FormErrors],
  selector: "app-register",
  template: `
  <div  class= "w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
    <h1 class = "text-2xl font-bold text-center text-slate-900 mb-8">Register</h1>
    <form class= "space-y-6">
      <div>
      <label for="username" class="block text-sm font-medium text-slate-700 mb-2">
        Username
      </label>
      <input
      id= "username"
      type="text"
      autocomplete="username"
      [formField]="registerForm.username"
      placeholder="username"
      class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"/>
      <app-form-error  [control]="registerForm.username()"></app-form-error>
    </div>

    <div>

    <label for="email" class = "block text-sm font-medium text-slate-700 mb-2">Email</label>
    <input
    id= "email"
    type = "email"
    [formField]="registerForm.email"
    class = "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"
    placeholder= "Enter you username"/>
    <app-form-error  [control]="registerForm.email()"></app-form-error>

    </div>

    <div>


    <label for="password" class ="block text-sm font-medium text-slate-700 mb-2" >Password</label>
    <input
    id="password"
    type="password"
    autocomplete="current-password"
    [formField]="registerForm.password"
    class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"
    placeholder="Enter your Password"
    />
    <app-form-error  [control]="registerForm.password()"></app-form-error>
    </div>

    <div>


    <label for="comfirmPassword" class="block text-sm font-medium text-slate-700 mb-2">Confirm Password</label>
    <input
    id = "comfirmPassword"
     type="Password"
     autocomplete= "current-Password"
     [formField]="registerForm.confirmPassword"
     class = "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring0slate-900 focus:border-transparent outline-none transiton-shadow"
     placeholder="Enter your password"
    />
    <app-form-error  [control]="registerForm.confirmPassword()"></app-form-error>

    </div>


    <button appButton  [disabled]="registerForm().invalid()"  (click)="onSubmit($event)" type= "submit"   class="w-full" >Register</button>

    <p class= "text-center text-slate-500 mt-4">
    Already have an account?

    <a routerLink="/login" class="text-slate-500 font-medium underline">Login</a>
  </p>
   </form>
  </div>
  `,

  host:{

        class: 'min-h-screen flex items-center justify-center bg-slate-100 p-4'

  },



})
export class Register {

registerModel = signal({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
});

registerForm = form(this.registerModel, registerSchema);

  onSubmit(event: Event){
    event.preventDefault();
    if (this.registerForm().valid()){
      console.log('Register Data:', this.registerForm().value());

    } else {
      console.log('Form is invalid');
    }
  }

  }
