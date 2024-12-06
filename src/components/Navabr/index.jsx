import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <nav className='header__nav'>
          <ul className='header__list'>
            <li>
              <NavLink to='/'>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/about'>
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/admin'>
              <span>Admin</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
