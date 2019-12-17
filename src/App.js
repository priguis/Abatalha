import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./componentes/Nav";
import Produtos from "./paginas/Produtos";
import Eventos from "./paginas/Eventos";
import Contatos from "./paginas/Contatos";
import PaginaInicial from "./paginas/PaginaInicial";
import FooterPage from "./componentes/FooterPage";


function App () {
  return (
    <Switch>
      <>
        <Navbar />
        <Route exact path='/' component={PaginaInicial} />
        <Route path='/produtos' component={Produtos} />
        <Route path='/eventos' component={Eventos} />
        <Route path='/contatos' component={Contatos} />
        
        <FooterPage />
      </>
     
    </Switch>
    
  )
}

export default App