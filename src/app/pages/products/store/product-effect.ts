import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductApi, } from '../Services/product-api';
import { productAction } from './product-action';
import  {catchError, map, of, switchMap} from 'rxjs'


export const productEffect = createEffect(
  (action$ = inject(Actions),
productApi = inject(ProductApi)
)=> {
  return action$.pipe(
    ofType(productAction.load),
    switchMap(()=>{
      return productApi.getProducts().pipe(

        map((products)=>productAction.loadSuccess({products})),
        catchError((error)=>of(productAction.loadFailure({error:error.message})))
      );
    })
  )
},
{
  functional:true,
}
);
