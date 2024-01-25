import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { HttpRequest } from '../models/common-model'

export const httpReuqest = createAsyncThunk(
  'Http Request',
  async (request: HttpRequest) => {

    const processedReq: HttpRequest = {
      method: request?.method,
      url: request?.url,
      signal: request?.signal,
      params:request?.params, // the request params argument eg 'userName=123&id=23'
      data: request?.data,
      headers: request?.headers,
      options: request?.options,
    }

    const response =  
    
    return response
  },
)
