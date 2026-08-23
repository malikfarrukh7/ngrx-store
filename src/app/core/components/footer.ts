import { Component } from "@angular/core";

@Component({
  selector: 'app-footer',
  template: `
  <footer>
    <p>&copy; 2024 My Angular App. All rights reserved.</p>
  </footer>
  `,
})

export class Footer {
  constructor() {
    console.log('Footer constructor called');
  }
}
