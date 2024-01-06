import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='p-2'>
        <Outlet />
      </main>
    </>
  )
}
export default Layout
