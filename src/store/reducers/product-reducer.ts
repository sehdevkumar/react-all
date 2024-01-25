import { createReducer } from '@reduxjs/toolkit'
import { Product } from '../../models/product-model'
import {
  FailedProductAction,
  RequestProductAction,
  SuccessProductAction,
} from '../actions/product-actions'

export type ProductState = {
  product: Product[] | []
  error: unknown
}
/**
 * Initial reducer states.
 */
const initialState: ProductState = {
  product: [],
  error: null,
}

/**
 * Creating the reducer and listening to all of it's actions.
 */
const productReducer = createReducer(initialState, (actions) => {
  actions
    .addCase(RequestProductAction, (state) => {
      state
    })

    .addCase(SuccessProductAction, (state, action) => {
      state.error = null
      state.product = action.payload
    })

    .addCase(FailedProductAction, (state, action) => {
      state.error = action.payload
      state.product = []
    })
})

export default productReducer
