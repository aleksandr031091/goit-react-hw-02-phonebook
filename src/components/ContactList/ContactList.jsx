import ProtoType from "prop-types";

const ContactList = ({ contacts }) => (
  <ul>
    <h2>Contacts</h2>
    {/* {contacts.map((contact) => (
      <li key={contact.id}>{contact.name + contact.number}</li>
    ))} */}
  </ul>
);

export default ContactList;
