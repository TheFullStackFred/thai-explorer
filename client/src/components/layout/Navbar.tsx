import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <nav className='p-6 mb-10 shadow-lg navbar'>
      <div className='flex items-center justify-between w-full'>
        <div>
          <Link to='/' className='text-lg font-bold text-nowrap'>
            Thai Explorer
          </Link>
        </div>
        <div className='hidden sm:flex'>
          <Link to='/' className='btn-ghost btn btn-sm rounded-btn'>
            Home
          </Link>
          <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
            About
          </Link>
        </div>
      </div>
      <div className='dropdown dropdown-end'>
        <div tabIndex={0} role='button' className='btn btn-ghost sm:hidden'>
          <RxHamburgerMenu size={25} />
        </div>
        <ul
          tabIndex={0}
          className='menu menu-sm dropdown-content  z-[1] shadow-lg bg-base-100 rounded-box w-52 border-2 border-solid'
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
