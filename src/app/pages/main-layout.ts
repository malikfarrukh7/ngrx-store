import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router"
import { Header } from "../core/components/header";
import { Footer } from "../core/components/footer";


@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer],
  template: `
  <app-header />
  <div class="flex-1 container mx-auto">

   <router-outlet />

  </div>

  <app-footer />`,

  host: {
    class: 'min-h-screen flex flex-col '
  }
})

export class MainLayout {

  constructor(){

    console.log('MainLayout constructor called');
  }
}
