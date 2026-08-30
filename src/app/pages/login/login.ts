import { Component, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { form, Field, FormField } from "@angular/forms/signals";
import { Button } from "../../shared/components/button";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",

  template: `
    <div class="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">

      <h1 class="text-2xl font-bold text-center text-slate-900 mb-8">
        Sign In
      </h1>

      <form (ngSubmit)="onSubmit($event)" class="space-y-6">

        <!-- Username -->
        <div>
          <label
            for="username"
            class="block text-sm font-medium text-slate-700 mb-2"
          >
            Username
          </label>

          <input
            type="text"
            [formField]="loginForm.username"
            id="username"
            autocomplete="username"
            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"
            placeholder="Enter your username"
          />
        </div>

        <!-- Password -->
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-slate-700 mb-2"
          >
            Password
          </label>

          <input
            type="password"
            [formField]="loginForm.password"
            id="password"
            autocomplete="current-password"
            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-shadow"
            placeholder="Enter your password"
          />
        </div>

        <!-- Submit -->
        <button
          appButton
          type="submit"
          class="w-full"
        >
          Sign in
        </button>

        <p class="text-sm text-center text-slate-500 mt-4">
          Don't have an account?
          <a
            routerLink="/register"
            class="text-slate-500 font-medium underline"
          >
            Register
          </a>
        </p>

      </form>
    </div>
  `,

  host: {
    class: "min-h-screen flex items-center justify-center bg-slate-100 p-4"
  },

  imports: [
    Button,
    RouterLink,
    FormField,
    FormsModule
  ]
})
export class Login {

  loginModel = signal({
    username: "",
    password: ""
  });

  loginForm = form(this.loginModel);

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.loginForm().valid()) {
      console.log("Login Data:", this.loginForm().value());
    } else {
      console.log("Form is invalid");
    }
  }
}
