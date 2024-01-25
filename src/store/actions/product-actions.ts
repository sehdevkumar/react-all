import { createAction } from '@reduxjs/toolkit'
import { Product } from '../../models/product-model'

// User reducer actions.
export const RequestProductAction = createAction<void>('REQUEST_PRODUCT')

export const SuccessProductAction = createAction<Product[]>(
  'SUCCESS_PRODUCT_ACTION',
)

export const FailedProductAction = createAction<Product[]>(
  'FAILED_PRODUCT_ACTION',
)
