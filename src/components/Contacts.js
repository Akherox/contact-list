import React from "react";
import Contact from "./Contact";
import AddContact from "./AddContact";

class Contacts extends React.Component {
  state = {
    contacts: [],
    id: "",
    name: "",
    phone: "",
    email: ""
  };

  onChange = e => {
    let contacts = this.state.contacts
    contacts[e.target.name] = e.target.value
    this.setState({ contacts: contacts })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addContact = e => {
    e.preventDefault();
    const newContact = {
      picture: null,
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    };

    this.setState({
      contacts: this.state.contacts.concat(newContact)
    });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const filtered = contacts.filter(contact => contact.name.first !== id);
    this.setState({
      contacts: [...filtered]
    });
  };

  componentDidMount() {
    const URL = "https://randomuser.me/api/?results=3";
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          contacts: data.results
        });
      });
  }

  render() {
    let { contacts } = this.state;
    console.log(contacts);

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            contact={contact}
            onDelete={this.deleteContact}
            key={contact.phone}
          />
        ))}
        <AddContact onChange={this.handleChange} onSubmit={this.addContact} />
      </React.Fragment>
    );
  }
}

export default Contacts;
