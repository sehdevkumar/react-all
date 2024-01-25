/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosInstance } from 'axios'

const useRequest = () => {
  let axiosIntance: AxiosInstance

  const onInitializedAxiosIntanceFromBaseUrl = (baseUrl: string) => {
    axiosIntance = axios.create({
      baseURL: baseUrl,
    })
  }

  const request = (
    method: 'GET' | 'PUT' | 'DELETE' | 'POST',
    url: string,
    params: object,
    body: object,
  ) => {
    
    


  }

  return { onInitializedAxiosIntanceFromBaseUrl, request }
}

export default useRequest
