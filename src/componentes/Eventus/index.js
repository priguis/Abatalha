import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";

import img1 from '../../imagens/event13.png'
import img2 from '../../imagens/event12.png'
import img3 from '../../imagens/event11.png'
import img4 from '../../imagens/event10.png'
import img5 from '../../imagens/event9.png'
import img6 from '../../imagens/event8.png'
import img7 from '../../imagens/event7.png'
import img8 from '../../imagens/event6.png'
import img9 from '../../imagens/event5.png'
import img10 from '../../imagens/event4.png'
import img11 from '../../imagens/event3.png'
import img12 from '../../imagens/event2.png'
import img13 from '../../imagens/event1.png'



const images = [
  
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13
];

const smallImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13
];

class Eventus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <MDBContainer>
        <div className="mdb-lightbox no-margin">
          <MDBRow>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[0]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 0, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[1]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 1, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[2]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 2, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[3]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 3, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[4]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 4, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[5]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 5, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[6]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 6, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[7]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 7, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[8]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 8, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default Eventus;