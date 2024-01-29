import { httpThunkReuqest } from '../middleware/http-thunk-reuqest'
import { HttpRequest } from '../models/common-model'
import { useAppDispatch } from '../store/app-store'
import { HttpResponse } from '../store/reducers/thunk-reducer'

const useHttpReq = () => {
  //Required Hooks
  const dispatch = useAppDispatch()

  // Init Request Methods
  function request(
    method: 'GET' | 'POST' | 'DELETE' | 'PUT',
    url: string,
    params?: object,
    body?: object,
  ): Promise<HttpResponse> {
    const processedReq: HttpRequest = {
      method: method,
      url: url,
      params: params,
      data: body,
    }

    return new Promise((resolved)=> {
    
        dispatch(httpThunkReuqest(processedReq)).then(response=> {
            resolved(response.payload);
        })         
    })

  }


  return {request}
}


export default useHttpReq