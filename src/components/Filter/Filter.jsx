import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ inputSearch }) => {
  return (
    <>
      <p className={css.paragraph}>Fined contacts by name</p>
      <input
        className={css.input}
        onChange={inputSearch}
        type="text"
        name="filter"
      />
    </>
  );
};

Filter.propTypes = { inputSearch: PropTypes.func.isRequired };

export default Filter;
