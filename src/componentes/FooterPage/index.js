import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './style.css';

const FooterPage = () => {
  return (
    <MDBFooter color="white" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">AS MINA NA ATIVA, OS BOYCETA NA AÇÃO!</h5>
            <p>
            Siga a Batalha Dominação nas redes sociais e fique por dentro de tudo que rola!            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/batalhadominacao/" target="_blank">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/batalhadominacao/" target="blank_">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/channel/UCM5ef-yB7YrnG7IW6yHEpUA" target="_blank">Youtube</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/priguis" target="_blank"> Priguis</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;