import { Products } from './../products';
import { createReducer ,createFeature,on} from "@ngrx/store";
import { Product } from "../types/product-types";
import {productAction} from './product-action'

export type ProductState={
  products: Product[];
  error: string | null;
  loading: boolean;
};

export const initialProductState: ProductState = {
  products:[],
  error: null,
  loading: false,
};


export const productFeature = createFeature({
  name: "products",
  reducer: createReducer(
    initialProductState,
    on(productAction.load,(state)=>({
      ...state,
      loading:true,
    })),

    on(productAction.loadSuccess,(state, {products})=>({
      ...state,
      products,
      loading:false,
      error: null,
    })),

    on(productAction.loadSuccess,(state,{products})=>({
      ...state,
      products,
      loading:false,
      error:null,

    })),


    on(productAction.loadFailure,(state,{error})=>({
      ...state,
      error,
      loading:false

    }))






  )
})
