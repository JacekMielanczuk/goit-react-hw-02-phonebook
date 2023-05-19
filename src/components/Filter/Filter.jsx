import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ inputSearch }) => {
  return (
    <>
      <p className={css.paragraph}>Find contacts by name</p>
      <imput
        className={css.imput}
        onChange={inputSearch}
        type="text"
        name="filter"
      />
    </>
  );
};

Filter.propTypes = { inputSearch: PropTypes.func.isRequired };

export default Filter;
