import React from "react";
import { Link } from "react-router-dom";

const AddContact = props => (
  <React.Fragment>
    <h2 className="title has-text-secondary" 
    style={{ marginTop: "20px" }}>
      Contato
    </h2>
    <Link to="/">Voltar</Link>
    <form className="field" onSubmit={props.onSubmit}>
      <div className="control">
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Nome do contato"
          value={props.first}
          onChange={props.onChange}
          style={{ marginTop: "5px" }}
        />

        <input
          type="tel"
          name="phone"
          className="input"
          placeholder="Telefone"
          value={props.phone}
          onChange={props.onChange}
          style={{ marginTop: "5px" }}
        />
        <input
          type="state"
          name="state"
          className="input"
          placeholder="E-mail"
          value={props.state}
          onChange={props.onChange}
          style={{ marginTop: "5px" }}
        />
      </div>
      <div className="control" >
        <button className="button is-link"
        style={{ marginTop: "5px" }}>
          <strong>Acrescentar</strong>
        </button>
      </div>
    </form>
  </React.Fragment>
);

export default AddContact;
