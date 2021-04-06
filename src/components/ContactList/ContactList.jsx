import ProtoType from "prop-types";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name + ":" + contact.number}
        {
          <button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </button>
        }
      </li>
    ))}
  </ul>
);

export default ContactList;
