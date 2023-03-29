import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';
import actions from '../../redux/actions';

import css from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.listItem}>
            <span className={css.name}>{name}:</span>
            <span className={css.number}>{number}</span>
            <button className={css.button} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;