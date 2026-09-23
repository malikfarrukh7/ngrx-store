import {createActionGroup,emptyProps,props} from "@ngrx/store"
import { Product } from "../types/product-types"

export const productAction = createActionGroup({
  source: 'Products',
  events: {
    load: emptyProps(),
    loadSuccess: props<{products: Product[]}>(),
    loadFailure: props<{error:string}>()

  }

})
