// import types from './contacts-types';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeFilter,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contasts-actions';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(initialState, {
  [fetchContactsSuccess]: (state, { payload }) => [...state, ...payload],
  [addContactSuccess]: (state, { payload }) => {
    const findName = state.find(({ name }) => name === payload.name);
    if (findName !== undefined) {
      alert(`${payload.name} already exists`);
      return;
    }
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
