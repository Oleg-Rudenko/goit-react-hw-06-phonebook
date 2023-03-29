import { v4 as uuid } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/addContact', (name, number) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));

const deleteContact = createAction('phonebook/deleteContact');

const changeFilter = createAction('phonebook/changeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;