import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class LinkMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      aberto: false
    }
  }

  handleAbreOuFecha = e => {
    this.setState(prevState => {
      return { aberto: !prevState.aberto }
    })
  }

  render () {
    let classesDasOpcoes = 'navbar-menu__opcoes'
    let classesDoBotao = 'navbar-menu__botao'

    if (this.state.aberto) {
      classesDasOpcoes += ' navbar-menu__opcoes--aberto'
      classesDoBotao += ' navbar-menu__botao--aberto'
    }

    return (
      <div className='navbar-menu navbar-links'>
        <span className={classesDoBotao} onClick={this.handleAbreOuFecha}>
          Menu
        </span>
        <ul className={classesDasOpcoes}>
          <li>
            <Link to='/' className='navbar-links__ativo'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/produtos' className='navbar-links__ativo'>
              Produtos
            </Link>
          </li>
          <li>
            <Link to='/eventos' className='navbar-links__ativo'>
              Eventos
            </Link>
          </li>
          <li>
            <Link to='/contatos' className='navbar-links__ativo'>
              Contatos
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default LinkMenu