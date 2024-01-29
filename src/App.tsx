import { useEffect } from 'react'
import './App.css'
import useHttpReq from './customHooks/useHttpRequest'
import { useAppDispatch } from './store/app-store'
import { SuccessProductAction } from './store/actions/product-actions'
import ProductView from './views/products'

function App() {
  const useHttp = useHttpReq()
  const actionDis = useAppDispatch()

  const makeCall = async () => {
    const result = await useHttp.request(
      'GET',
      'https://api.escuelajs.co/api/v1/products',
    )
    actionDis(SuccessProductAction(result.data))
  }

  useEffect(() => {
    makeCall()

    return () => {}
  }, [])

  // Init Base Url with Axios

  return (
    <>
      <ProductView></ProductView>
    </>
  )
}

export default App
