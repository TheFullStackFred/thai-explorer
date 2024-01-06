import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError
} from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

const ErrorPage = () => {
  const error = useRouteError()
  isRouteErrorResponse(error)
  const navigate = useNavigate()

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
        <button className='btn-secondary btn' onClick={() => navigate('/')}>
          Back Home
        </button>
      </div>
    </>
  )
}
export default ErrorPage