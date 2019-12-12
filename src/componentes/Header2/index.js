import React from 'react';
import './style.css';

function Header2 (props) {
    return (
        <section className= {props.className}>
            <h1> Conheça nossos produtos Dominação! </h1>

    <h5>Nossos produtos são produzidos para dar continuidade no nosso trabalho, feito com amor e carinho! </h5>
            
            <button className='botao-whats' href='https://www.instagram.com/lojadominacao/' target="_blank">Encomende Agora!</button>
            
        </section>

    )
}

export default Header2