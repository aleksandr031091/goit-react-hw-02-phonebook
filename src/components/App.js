import { Component } from "react";
import shortid from "shortid";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export default class App extends Component {
  state = {
    contacts: [],
  };

  addContacts = () => {
    const contact = {
      id: shortid.generate(),
      // name,
      // number,
    };

    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContacts} />
        <ContactList />
      </div>
    );
  }
}
