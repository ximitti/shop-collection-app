import React from 'react'
import { Link } from 'react-router-dom'
import NavbarWrapper from './styles'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <nav>
        <ul>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
        </ul>
      </nav>
    </NavbarWrapper>
  )
}

export default Navbar
