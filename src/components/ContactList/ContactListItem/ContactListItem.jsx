import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li key={id} className={css.item}>
      <p className={css.paragraph}>
        {name}: {number}
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
