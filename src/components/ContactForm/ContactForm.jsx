import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import { getContacts } from '../../redux/selectors';

import css from './ContactForm.module.css';
function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) return;

    const contactNames = contacts.map(contact => contact.name.toLowerCase());
    if (contactNames.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(actions.addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.formLabel}>
        Name
        <input
          type="text"
          value={name}
          name="name"
          className={css.formInput}
          placeholder=" "
          onChange={handleNameChange}
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          type="tel"
          value={number}
          name="number"
          className={css.formInput}
          placeholder=" "
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;