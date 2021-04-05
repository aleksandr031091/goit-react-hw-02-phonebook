import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <ContactList />
      </div>
    );
  }
}
