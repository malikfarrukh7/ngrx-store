import { Store } from '@ngrx/store';
import { Component, inject, OnInit } from "@angular/core";
import { productAction } from './store/product-action';
import { toSignal } from '@angular/core/rxjs-interop';
import { productFeature } from './store/product-feature';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: "app-product",
  template: `
  <div class="py-8  px-8">
      <div class="flex items-center justify-between mb-8">

      <h1>product</h1>

      </div>
  </div>
<pre>{{products() | json}}

  `,
})
export class Products implements OnInit {

  private readonly store = inject(Store);

  protected readonly products = toSignal(this.store.select(productFeature.selectProducts));


  ngOnInit(): void {
      this.store.dispatch(productAction.load())
  }
}
