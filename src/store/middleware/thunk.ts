import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { HttpRequest } from '../../models/common-model'

export const httpReuqest = createAsyncThunk(
  'todos/httpReuqest',
  async (request: HttpRequest) => {
    const request: HttpRequest = {
      method: request.method,
      url: request.url,
      signal: AbortSignal,
      params, // the request params argument eg 'userName=123&id=23'
      data: body,
      loaderText: loaderText ?? 'Loading...',
      loaderSubText: loaderSubText ?? 'wait...',
      headers: '',
      options: '',
    }

    const response = await axios.request()
    return response.todos
  },
)
