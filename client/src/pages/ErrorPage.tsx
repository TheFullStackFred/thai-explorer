import { Link } from 'react-router-dom'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

const ErrorPage = () => {
  const error = useRouteError()
  const isErrorResponse = isRouteErrorResponse(error)

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center space-y-4'>
        <h1 className='text-7xl'>Oops...</h1>
        <p className='text-lg'>
          {isErrorResponse
            ? 'This page does not exist.'
            : 'An unexpected error occurred.'}
        </p>
        <Link to='/' className='btn-error btn'>
          Back Home
        </Link>
      </div>
    </>
  )
}

export default ErrorPage
