import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  imports: [RouterLink],
  selector: "app-register",
  template: `
  <div  class="w-full max-w-md p8 bg-white rounded-2xl shadow-xl">
    <h1 class = "text-2xl font-bold text-center text-slate-900 mb-8">Register</h1>
    <form class= "space-y-6">
      <div>
      <label for="username" class="block text-sm" font-medium text-slate-700 mb-2>
        Username
      </label>
      <input
      id= "username"
      type="text"
      autocomplete="username"
      class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"/>
    </div>

    <div>

    <label for="email" class = "block text-sm font-medium text-slate - 700 mb-2">Email</label>
    <input
    id= "email"
    type = "email"
    auotcomplete = " w-full px-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"/>
    placeholder= "Enter you username"
    </div>

    <div>


    <label for="password" class ="block text-sm font-medium text-slate-700, mb-2" >password</label>
    <input
    id="password"
    type="password"
    autocomplete="current-password"
    class="w-full px-4 py-3 border border-slate-300 rounded-lg focus :ring-2 focus:slate-900 focus:border-transparent outline-none transition-shadow"
    placeholder="Enter your Password"
    />
    </div>

    <div>


    <label for="comfirmPassword">Confirm Password</label>
    <input
    id = "comfirmPassword"
     type="Password"
     autocomplete= "current-Password"
     class = "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring0slate-900 focus:border-transparent outline-none transiton-shadow"
     placeholder="Enter your password"
    />

    </div>

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
export class Register {}
