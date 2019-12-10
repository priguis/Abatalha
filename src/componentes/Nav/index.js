import React from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu'
import Logo from '../../imagens/logo.png'
import './style.css'

function Nav () {
  return (
    <nav className='navbar'>
      <div>
        <Link to='/'>
          {' '}
          <img
            className='navbar-logo'
            src={Logo}
            alt='Logotipo da Batalha'
          />
        </Link>
      </div>
      <Menu />
    </nav>
  )
}

export default Nav