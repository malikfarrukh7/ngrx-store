import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  template: `
  <div class= "w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
    <h1 class="text-2xl font-bold text-center text-slate-900 mb-8">Sign In</h1>

    <form class= "space-y-6">
      <div>

      <label for ="username" class= "block text-sm font-medium text-slate-700 mb-2"> Username</label>
      <input type="text"
       id = "username"
       autocomplete="username"
       class= "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"
       placeholder="Enter your username"/>
      </div>

      <div>
      <label for ="password" class= "block text-sm font-medium text-slate-700 mb-2"> Password</label>
      <input type="password"
       id = "password">

      </div>

    </form>



  </div>`,
  host:{
    class: 'min-h-screen flex items-center justify-center bg-slate-100 p-4'
  }
})
export class Login {}
