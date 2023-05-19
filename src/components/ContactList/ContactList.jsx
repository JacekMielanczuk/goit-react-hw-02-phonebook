import ContactListItem from './ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.length !== 0 &&
        contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
