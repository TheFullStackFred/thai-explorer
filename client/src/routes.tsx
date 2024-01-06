import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DestinationDetailPage from './pages/DestinationDetailPage'
import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'destinations/:slug', element: <DestinationDetailPage /> }
    ]
  }
])

export default router
