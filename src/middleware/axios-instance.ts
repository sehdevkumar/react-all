import axios, { AxiosInstance } from 'axios'
import { HttpRequest } from '../models/common-model'

let axiosInstance: AxiosInstance

function initAxiosInstance(baseUrls: string) {
  axiosInstance = axios.create({ baseURL: baseUrls })
}

async function getAxiosInstance(config: HttpRequest): Promise<AxiosInstance> {
  return  axiosInstance(config)
}

export { initAxiosInstance, getAxiosInstance }
