import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const NavBar = () => {
  return (
    <header className="py-5 px-5 flex justify-between items-center bg-chart-5 rounded-b-md shadow-md">
      <h2 className='font-extrabold'>Where in the World?</h2>
      <ThemeSwitch />
    </header>
  );
}

export default NavBar