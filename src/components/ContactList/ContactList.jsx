import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactSlice';
import { setFilter } from '../../redux/filterSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsFilter);

  const handleFilterChange = e => dispatch(setFilter(e.target.value));

  return (
    <ul className={css.list}>
      <label>
        <h2>Find contacts by name</h2> 
        <input  onChange={handleFilterChange} />
      </label>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.listItem}>
            <span className={css.name}>{name}:</span>
            <span className={css.number}>{number}</span>
            <button className={css.button} id={id} onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;