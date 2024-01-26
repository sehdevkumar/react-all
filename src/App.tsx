import { useEffect } from 'react'
import './App.css'
import useHttpReq from './customHooks/useHttpRequest'
import { useAppDispatch, useAppSelector } from './store/app-store'
import { SuccessProductAction } from './store/actions/product-actions'
import ProductView from './views/products'

function App() {

  const useHttp = useHttpReq()
  const useActionDis = useAppDispatch()

  useEffect(()=> {
     useHttp.request('GET','https://api.escuelajs.co/api/v1/products').then(response=> {
         useActionDis(SuccessProductAction(response.data))
     })

     return ()=> {
     }
  } ,[])
  
  // Init Base Url with Axios

  return (
    <>
     
     <ProductView></ProductView>
       
    </>
  )
}

export default App

