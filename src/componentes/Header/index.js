import React from 'react'
import './style.css'

function Header(props) {
    return (
    <div className="apresentacao">
        <section className={props.className}>
            <h1>{props.titulo}</h1>
            <h3>Uma batalha de conhecimento direcionada à mulheres, homens trans e pessoas não binárias,
     que acontece toda segunda-feira em frente ao Mosteiro da São Bento.  </h3>
            <h5>                  “A gente percebia que as mulheres não estavam nas chaves de batalha,
                   mas tinham mulheres rimando depois que acabava o rolê”.
           A batalha Conta com MCs de todas as regiões de São Paulo e também de outros estados,
            começando sempre com um MIC aberto para quem quiser falar de sentimentos,
             poesia e música e logo em seguida começa uma batalha calorosa de pessoas maravilhosas que querem voz,
              temos também PocketShows incríveis com grandes artistas da cena do Rap.

</h5>
<h3> Eaí, bora colar e se conhecer?</h3>


        </section>
        </div>
    )

}

export default Header