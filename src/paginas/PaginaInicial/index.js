import React from 'react';
import Header from '../../componentes/Header';
import Carousel from '../../componentes/Carousel/index';

function PaginaInicial () {
  return (
    <main>
      <Carousel
      />
      <Header
        titulo='Dominação - A Batalha'
        className='home-header'
      />
    </main>
  )
}

export default PaginaInicial
