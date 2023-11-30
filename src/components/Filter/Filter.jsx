import propTypes from 'prop-types';
import css from "./Filter.module.css"

export const Filter = ({ filter, handleChange }) => (
  <div className={css.filter}>
  <label className={css.filterItem} >
    <span>Find contacts by name</span>
    <input type="text" name="filter" value={filter} onChange={handleChange} />
  </label>
  </div>
);


Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
}