import { addContact, delContact, setFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    contacts: {
        items: [],
        filter: '',
    },
};

export const contactsReducer = createReducer(initialState.contacts, {
 [addContact]: (state, action) => {
    state.items.push(action.payload);
  },
  [delContact]: (state, action) => {
    const index = state.items.findIndex(
      contacts => contacts.id === action.payload
    );
    state.items.splice(index, 1);
  },
  [setFilter]: (state, action) => {
    state.filter = action.payload;
  },
});