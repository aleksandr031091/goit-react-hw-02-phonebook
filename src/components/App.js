import { Component } from "react";
// import shortid from "shortid";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

import Section from "./Section";
import Container from "./Container";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const contact = {
      // id: shortid.generate(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find((contact) => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === "" || number.trim() === "") {
      alert("please add name and phone number");
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <Container>
            <ContactForm onSubmit={this.addContact} />

            {visibleContacts.length > 1 && (
              <Filter value={filter} onChangeFilter={this.changeFilter} />
            )}
          </Container>
          {visibleContacts.length > 0 && (
            <Container title="Contacts">
              <ContactList
                contacts={visibleContacts}
                onRemoveContact={this.removeContact}
              />
            </Container>
          )}
        </Section>
      </>
    );
  }
}

export default App;
