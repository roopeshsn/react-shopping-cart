import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='text-gray-700 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center'>
        <nav className='flex flex-wrap items-center text-base justify-center'>
          <NavLink
            exact
            to='/'
            activeClassName='border-b-2 border-blue-500'
            className='mr-5 hover:text-gray-900'
          >
            Home
          </NavLink>

          <NavLink
            to='/store'
            activeClassName='border-b-2 border-blue-500'
            className='mr-5  hover:text-gray-900'
          >
            Store
          </NavLink>
          <NavLink
            to='/team'
            activeClassName='border-b-2 border-blue-500'
            className='mr-5 hover:text-gray-900'
          >
            Team
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
