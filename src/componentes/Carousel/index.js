import React from 'react'
import { Carousel } from 'react-bootstrap';
import Elas from '../../imagens/elas.jpg';
import Braba from '../../imagens/braba.jpg';
import Brabass from '../../imagens/brabass.jpg';

 

 function Carousell() {
     return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={Elas}
            alt="First slide"
          />
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Braba}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Brabass}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

     )
     
 }
export default Carousell