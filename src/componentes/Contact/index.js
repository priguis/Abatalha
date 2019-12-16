
import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import './style.css'

import img6 from '../../imagens/niaray.png'
import img5 from '../../imagens/jade.png'
import img4 from '../../imagens/mart.png'
import img3 from '../../imagens/nat.png'
import img2 from '../../imagens/peita6.png'
import img1 from '../../imagens/jazz.png'



class CardExample extends Component {
  render() {
    return (
    <div className = 'container'>


        <h1>Quem faz acontecer</h1>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={img6} />
            <MDBCardBody cascade>
              <MDBCardTitle>Gabi Nyarai</MDBCardTitle>
              <MDBCardText>Mestre de cerimônia 🎤
Poeta / Cantora / Compositora </MDBCardText>
              <MDBBtn href="https://www.instagram.com/gabinyarai/" target='_blank'>Instagram</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={img5} />
            <MDBCardBody cascade>
              <MDBCardTitle>Jade Quebra</MDBCardTitle>
              <MDBCardText>Mestre de cerimônia 🎤
Poeta / Funkeira / Pedagoga </MDBCardText>
              <MDBBtn href="https://www.instagram.com/jadequebra/" target="_blank">Instagram</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={img4} />
            <MDBCardBody cascade>
              <MDBCardTitle>Ingrid Martins</MDBCardTitle>
              <MDBCardText>Mestre de cerimônia 🎤
Poeta / SLAM DA NORTE 🎞 </MDBCardText>
              <MDBBtn href="https://www.instagram.com/in.martins/" target="_blank">Instagram</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={img3} />
            <MDBCardBody cascade>
              <MDBCardTitle>Nath Santos</MDBCardTitle>
              <MDBCardText>Fotógrafa 📸 / Audiovisual da Dominação 🎥 🎞</MDBCardText>
            <MDBBtn href="https://www.instagram.com/tianathuts/" target="_blank">Instagram</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={img2} />
            <MDBCardBody cascade>
              <MDBCardTitle>Priscilla Simas</MDBCardTitle>
              <MDBCardText>Fotógrafa 📸 / Audiovisual da Dominação 🎥 🎞</MDBCardText>
              <MDBBtn href="https://www.instagram.com/priscillasimas/" target="_blank">Instagram</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={img1} />
            <MDBCardBody cascade>
              <MDBCardTitle>Jazz Oliveira</MDBCardTitle>
              <MDBCardText>Lojinha da Dominação 🛒 / Modelo /  Sereia 🌊</MDBCardText>
              <MDBBtn href="https://www.instagram.com/negrimi" target="_blank">Instagram</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </div>
      
    )
  }
}

export default CardExample;