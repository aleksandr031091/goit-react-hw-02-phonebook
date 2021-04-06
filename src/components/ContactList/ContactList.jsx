import PropTypes from "prop-types";

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

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
