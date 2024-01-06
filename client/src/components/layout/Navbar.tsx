import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <nav className='mb-8 shadow-lg navbar'>
      <div className='container mx-auto'>
        <div className='flex-1 text-nowrap'>
          <Link to='/' className='text-lg font-bold'>
            Thai Explorer
          </Link>
        </div>
        <div className='hidden xs:flex'>
          <Link to='/' className='btn-ghost btn btn-sm rounded-btn'>
            Home
          </Link>
          <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
            About
          </Link>
        </div>
      </div>
      <div className='dropdown dropdown-end'>
        <div tabIndex={0} role='button' className='btn btn-ghost xs:hidden'>
          <RxHamburgerMenu size={25} />
        </div>
        <ul
          tabIndex={0}
          className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
        >
          <Link to='/' className='text-white btn-ghost btn btn-sm rounded-btn'>
            Home
          </Link>
          <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
            About
          </Link>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
