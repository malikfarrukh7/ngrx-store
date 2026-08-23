import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  template: `
  <header>
    <h1>My Angular App</h1>
  </header>
  `
})

export class Header {
  constructor() {
    console.log('Header constructor called');
  }
}
