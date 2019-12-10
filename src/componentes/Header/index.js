import React from 'react'
import './style.css'

function Header(props) {
    return (
        <section className={props.className}>
            <h1>{props.titulo}</h1>
            <h3>Somos uma batalha de conhecimento direcionada à mulheres, homens trans e pessoas não binárias,
     que acontece toda segunda-feira em frente ao Mosteiro da São Bento.  </h3>
            <h5>Comandada por Gaby Niaray, Jade Quebra e Ingrid Martins,
                 viemos com a ideia de ocupar a cidade com rimas e palavras da minoria,
                 escrevendo a história com uma caneta que não sai nunca mais.
                  “A gente percebia que as mulheres não estavam nas chaves de batalha,
                   mas tinham mulheres rimando depois que acabava o rolê”, contou Gabi Nyarai.
           A batalha Conta com MCs de todas as regiões de São Paulo e também de outros estados,
            começando sempre com um MIC aberto para quem quiser falar de sentimentos,
             poesia e música e logo em seguida começa uma batalha calorosa de pessoas maravilhosas que querem voz,
              temos também PocketShows incríveis com grandes artistas da cena do Rap.

</h5>
        </section>
    )
}

export default Header