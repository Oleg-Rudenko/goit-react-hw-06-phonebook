import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import actions from '../../redux/actions';
import css from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
        className={css.input}
      ></input>
    </label>
  );
};

export default Filter;