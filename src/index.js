import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import "./styles.css";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
        <div className="container is-fluid" style={{ height: "100vh" }}>
          <div className="notification">
            <h1
              className="title has-text-link is-centered has-text-centered"
              style={{ marginTop: "30px" }}
            >
              Agenda de Contatos
            </h1>
            <h3 className="subtitle has-text-link is-centered has-text-centered">Projeto React</h3>
            <Routes>
              <Route exact path="/" element={<Contacts />}/>
              <Route exact path='/add' element={<AddContact/>}/>
            </Routes>
          </div>
        </div>
        </Fragment>
      </Router>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
