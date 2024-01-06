import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

const ErrorPage = () => {
  const error = useRouteError()
  isRouteErrorResponse(error)

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center h-screen space-y-4'>
        <h1 className='text-7xl'>Oops...</h1>
        <p className='text-lg'>
          {isRouteErrorResponse(error)
            ? 'This page does not exist.'
            : 'An unexpected error occurred.'}
        </p>
      </div>
    </>
  )
}
export default ErrorPage
