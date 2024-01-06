import { createBrowserRouter } from 'react-router-dom'

import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DestinationDetailPage from './pages/DestinationDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: 'destinations/:slug', element: <DestinationDetailPage /> }
    ]
  }
])

export default router
