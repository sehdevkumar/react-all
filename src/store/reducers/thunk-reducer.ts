import { createReducer } from '@reduxjs/toolkit'
import { httpThunkReuqest } from '../../middleware/http-thunk-reuqest';

export type HttpResponse = any
/**
 * Initial reducer states.
 */
const initialState: HttpResponse = null;

/**
 * Creating the reducer and listening to all of it's actions.
 */
const thunkHttpReducer = createReducer(initialState, (actions) => {
  actions
    .addCase(httpThunkReuqest.pending, (state) => {
      state
    })

    .addCase(httpThunkReuqest.fulfilled, (state,action) => {
      
      state = action.payload;
    })

    .addCase(httpThunkReuqest.rejected, (state, action) => {
     
      state = action.error;
    })
})

export default thunkHttpReducer
