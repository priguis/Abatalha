import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import './style.css';

const FormPage = () => {
  return (
    <div className="form">
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h2 text-center mb-4">Fale com a gente!</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Insira seu Nome
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Insira seu Email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Assunto
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Escreva Sua Mensagem
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4">
              <MDBBtn color="warning" outline type="submit">
                Enviar
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default FormPage;