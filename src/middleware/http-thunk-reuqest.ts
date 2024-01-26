import { createAsyncThunk } from '@reduxjs/toolkit'
import { HttpRequest } from '../models/common-model'
import { getAxiosInstance } from './axios-instance'


// This is An Middleware setup to make the Http Calls
export const httpThunkReuqest = createAsyncThunk('httpThunk', async (config : HttpRequest) => {
       
    const response = await  getAxiosInstance(config);

    return response
})
